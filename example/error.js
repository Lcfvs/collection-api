import api from './api/api.js'

const { href } = api.types.accounts.queries().create

const error = Object.assign(new Error('Invalid account'), {
  code: 'INVALID_ACCOUNT',
  details: {
    name: new Error('Invalid account name')
  }
})

console.log(api.error(href, error), null, 2)
