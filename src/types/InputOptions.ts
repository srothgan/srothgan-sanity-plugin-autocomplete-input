import type {Option} from './Option.js'

export type InputOptions<Parent = Record<string, unknown>, Params = Record<string, unknown>> = {
  autocompleteFieldPath?: string
  disableNew?: boolean
  options?: Option[]
  groq?: {
    query: string
    params?: Params | ((parent?: Parent) => Params)
    transform?: (result: unknown) => Option[]
  }
}
