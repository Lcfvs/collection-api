import * as collection from '@lcf.vs/collection'
import api from '../../lib/api.js'
import log from '../utils/log.js'
import * as accounts from './accounts.js'

export default {
  ...api
    .withCollection(api.collection
      .withHref('https://api.localhost')
      .withLinks([
        collection.link
          .withHref('https://docs.localhost')
          .withRel('help')
      ]))
    .withType(accounts),
  log
}
