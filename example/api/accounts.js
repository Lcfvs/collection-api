import * as collection from '@lcf.vs/collection'

export const name = 'accounts'

export const fields = {
  id: collection.property
      .withName('id')
      .withPrompt('Account ID'),
  name: collection.property
    .withName('name')
    .withPrompt('Account name'),
  github: collection.link
    .withPrompt('Account GitHub')
    .withRel('github')
}

export const queries = {
  create: collection.query
    .withData([
      fields.name
    ])
    .withLinks([
      fields.github
    ])
    .withHref('/accounts/create')
    .withPrompt('Create an account')
    .withRel('create'),
  searchByName: collection.query
    .withData([
      fields.name
    ])
    .withHref('/accounts/search-by-name')
    .withPrompt('Search an account')
    .withRel('search')
}

export const template = collection.template
  .withData([
    fields.id,
    fields.name
  ])
  .withLinks([
    fields.github
  ])
