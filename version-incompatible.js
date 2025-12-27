const {showIncompatiblePluginDialog} = require('@sanity/incompatible-plugin')
const {name, version, sanityExchangeUrl} = require('./package.json')

module.exports = showIncompatiblePluginDialog({
  name: name,
  versions: {
    v3: undefined,
    v2: undefined,
  },
  sanityExchangeUrl,
  currentVersion: version,
  latestStudioVersionSupported: 'v5',
  minimumStudioVersionRequired: 'v4',
})
