import api from './api/api.js'

const { accounts } = api.types
const { href } = accounts.queries().create

api.log(api.error(href, Object.assign(new Error('Invalid account'), {
  code: 'INVALID_ACCOUNT',
  details: {
    name: new Error('Invalid account name')
  }
})))
