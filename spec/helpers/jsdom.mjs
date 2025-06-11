import jsdom from 'jsdom'

const { JSDOM } = jsdom

const { document } = new JSDOM(`<!doctype html><html><body></body></html>`)
  .window
globalThis.document = document
