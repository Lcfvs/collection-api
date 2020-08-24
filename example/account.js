import api from './api/api.js'

const { accounts } = api.types
const { href } = accounts.queries().create

api.log(accounts.items(href, [
  {
    id: 1,
    name: 'Lcf.vs',
    github: 'https://github.com/Lcfvs'
  }
]))
