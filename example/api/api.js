import * as collection from '@lcf.vs/collection'
import api from '@lcf.vs/collection-api'
import * as accounts from './accounts.js'

export default api
  .withCollection(api.collection
    .withHref('https://api.localhost')
    .withLinks([
      collection.link
        .withHref('https://docs.localhost')
        .withRel('help')
    ]))
  .withType(accounts)
