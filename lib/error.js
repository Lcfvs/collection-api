import * as collection from '@lcf.vs/collection'
import build from './utils/build.js'

function code (error, { code }) {
  return error.withCode(code)
}

function detail ([name, { message }]) {
  return collection.detail
    .withMessage(message)
    .withName(name)
}

function details (error, { details }) {
  return details
    ? error.withDetails(Object.entries(details).map(detail))
    : error
}

function message (error, { message }) {
  return error.withMessage(message)
}

function title (error, { title }) {
  return error.withTitle(title)
}

export default function error (href, error) {
  const target = collection.error

  return collection.document
    .withCollection(collection.collection
      .withHref(href)
      .withLinks([
        collection.link
          .withHref(this.collection.href)
          .withRel('collection')
      ])
      .withError(build(target, error, [
        code,
        details,
        message,
        title
      ]))
      .withVersion(this.collection.version))
}
