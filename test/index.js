const chai = require('chai')
const { describe, it } =  require('mocha')
const deepClone = require('../src/deepClone')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')

const assert = chai.assert
chai.use(sinonChai)

describe('deepClone', () => {
  it('是一个函数', () => {
    assert.isFunction(deepClone)
  })
  it('能复制基本类型', () => {
    // string number boolean null undefind symbol
    const s = 'xxx'
    assert(deepClone(s) === s)
    const n = 123
    assert(deepClone(n) === n)
    const b = true
    assert(deepClone(b) === b)
    const Null = null
    assert(deepClone(Null) === Null)
    const Undefind = undefined
    assert(deepClone(Undefind) === Undefind)
    const symbol = Symbol()
    assert(deepClone(symbol) === symbol)
  })
})
