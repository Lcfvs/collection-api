import * as collection from '@lcf.vs/collection'
import build from './utils/build.js'

function data ({ ...item }, { pairs, template }) {
  if (template.data) {
    const properties = template.data
      .map(property, pairs)
      .filter(Boolean)

    if (properties.length) {
      item = item.withData(properties)
    }
  }

  return item
}

function item (pairs) {
  const { collection: { href, template } } = this
  const item = collection.item
    .withHref(`${href}/${pairs.id}`)

  return build(item, { pairs, template }, [
    data,
    links
  ])
}

function link ({ rel }) {
  const { [rel]: href = null } = this

  return href !== null && collection.link
    .withHref(href)
    .withRel(rel)
}

function links ({ ...item }, { pairs, template }) {
  if (template.links) {
    const links = template.links
      .map(link, pairs)
      .filter(Boolean)

    if (links.length) {
      item = item.withLinks(links)
    }
  }

  return item
}

function property ({ name }) {
  const { [name]: value = null } = this

  return value !== null && collection.property
    .withName(name)
    .withValue(value)
}

function refers (to, links = []) {
  return to.withCollection(collection.collection
    .withLinks([
      collection.link
        .withHref(to.collection.href)
        .withRel('collection'),
      ...links
    ])
    .withVersion(to.collection.version))
}

function withHref (root, document, href) {
  const url = new URL(href, root.collection.href)

  return document.withCollection(document.collection.withHref(`${url}`))
}

export default function withType ({
  fields,
  name,
  links = [],
  queries,
  scripts = undefined,
  template
}) {
  const { types = {} } = this
  const type = withHref(this, refers(this, links), `/${name}`)
  const items = refers(type)

  return {
    ...this,
    types: {
      ...types,
      [name]: {
        ...type
          .withCollection(type.collection
            .withQueries(Object.values(queries))
            .withScripts(scripts)
            .withTemplate(template)),
        fields () {
          return fields
        },
        items (href, records) {
          return items
            .withCollection(items.collection
              .withHref(href)
              .withItems(records.map(item, this)))
        },
        name () {
          return name
        },
        queries () {
          return queries
        }
      }
    }
  }
}
