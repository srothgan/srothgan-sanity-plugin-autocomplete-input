import {Autocomplete, Card, Text} from '@sanity/ui'
import compact from 'just-compact'
import get from 'just-safe-get'
import unique from 'just-unique'
import React, {useCallback, useEffect, useMemo, useState} from 'react'
import {
  PatchEvent,
  set,
  StringInputProps,
  StringSchemaType,
  unset,
  useClient,
  useFormValue,
} from 'sanity'

import type {InputOptions, Option} from './types/index.js'

export type AutocompleteSchemaType = Omit<StringSchemaType, 'options'> & {
  options?: StringSchemaType['options'] & InputOptions
}
export type InputProps = StringInputProps<AutocompleteSchemaType>

export const AutoCompleteInput = (props: InputProps): React.ReactElement => {
  const {id, schemaType, value, validationError, readOnly, onChange} = props

  const sanityClient = useClient()
  const documentValue = useFormValue([])
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = React.useState('')
  const [options, setOptions] = React.useState<Option[]>([])
  const canCreateNew = schemaType.options?.disableNew !== true

  const optionsList = useMemo<(Option & {isNew?: boolean})[]>(() => {
    const uniqueOptions = unique(
      options.map(({value: optionValue}) => optionValue),
      false,
      true,
    )
    const queryInOptions = uniqueOptions.find((optionValue) => optionValue === query)
    if (!queryInOptions && canCreateNew) {
      return [
        ...uniqueOptions.map((optionValue) => ({value: optionValue})),
        {value: query, isNew: true},
      ]
    }

    return uniqueOptions.map((optionValue) => ({value: optionValue}))
  }, [query, options, canCreateNew])

  const handleQueryChange = useCallback((queryValue: string | null) => {
    setQuery(queryValue ?? '')
  }, [])

  const handleChange = useCallback(
    (newValue: string) => {
      onChange(PatchEvent.from(newValue ? set(newValue) : unset()))
    },
    [onChange],
  )

  const renderOption = useCallback(
    (option: Option & {isNew?: boolean}) => (
      <Card as="button" padding={3} tone={option.isNew ? 'primary' : 'default'} shadow={1}>
        {option.isNew ? (
          canCreateNew && <Text>Create new option &quot;{option.value}&quot;</Text>
        ) : (
          <Text>{option.value}</Text>
        )}
      </Card>
    ),
    [canCreateNew],
  )

  useEffect(() => {
    if (schemaType.options?.options) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setOptions(schemaType.options.options)
      setLoading(false)
      return
    }

    const path = schemaType.options?.autocompleteFieldPath ?? 'title'
    const {
      query: groqQuery,
      transform,
      params = {},
    } = schemaType.options?.groq || {
      query: `*[defined(${path})] { "value": ${path} }`,
    }

    const resolvedParams =
      typeof params === 'function'
        ? params(documentValue as Record<string, unknown> | undefined)
        : params

    setLoading(true)
    sanityClient.fetch(groqQuery, resolvedParams).then((results) => {
      if (Array.isArray(results)) {
        const transformedResults = transform ? transform(results) : results
        const compactedValues = compact(transformedResults.map((doc) => get(doc, 'value')))
        setOptions(compactedValues.map((optionValue) => ({value: String(optionValue)})))
        setLoading(false)
      }
    })
  }, [schemaType.options, documentValue, sanityClient])

  return (
    <Autocomplete
      id={id}
      readOnly={readOnly ?? false}
      customValidity={validationError}
      loading={loading}
      disabled={loading}
      options={optionsList}
      value={value ?? ''}
      onChange={handleChange}
      onQueryChange={handleQueryChange}
      renderOption={renderOption}
    />
  )
}
