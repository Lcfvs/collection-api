import { collection, document } from '@lcf.vs/collection'
import error from './error.js'
import root from './root.js'
import withType from './withType.js'

export default {
  ...document.withCollection(collection.withVersion('1.0')),
  types: undefined,
  error,
  root,
  withType
}
