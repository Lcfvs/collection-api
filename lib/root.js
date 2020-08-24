import { document, item, property } from '@lcf.vs/collection'

export default function root () {
  const { collection, types } = this

  return document
    .withCollection(collection
      .withItems(Object.entries(types)
        .map(([name, { collection: { href } }]) => item
          .withData([
            property
              .withName('name')
              .withValue(name)
          ])
          .withHref(href))))
}
