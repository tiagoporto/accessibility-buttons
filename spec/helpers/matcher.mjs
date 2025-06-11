import JasmineDOM from '@testing-library/jasmine-dom'

beforeAll(() => {
  jasmine.addMatchers(JasmineDOM.default)
})
