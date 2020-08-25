import api from './api/api.js'

const { href } = api.types.accounts.queries().create
const accounts = [
  {
    id: 1,
    name: 'Lcf.vs',
    github: 'https://github.com/Lcfvs'
  }
]

console.log(api.types.accounts.items(href, accounts), null, 2)
