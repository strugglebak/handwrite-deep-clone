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
  describe('对象', () => {
    it('能够复制普通对象', () => {
      const a = {name: 'xxx', child: {name: 'yyy'}}
      const a2 = deepClone(a)
      assert(a !== a2)
      assert(a.name === a2.name)
      assert(a.child !== a2.child)
      assert(a.child.name === a2.child.name)
    })
    it('能够复制数组对象', () => {
      const a = [[11, 12], [21, 22], [31, 32]]
      const a2 = deepClone(a)
      assert(a !== a2)
      assert(a[0] !== a2[0])
      assert(a[1] !== a2[1])
      assert(a[2] !== a2[2])
      assert.deepEqual(a, a2)
    })
    it('能够复制函数对象', () => {
      const a = function(x, y) {
        return x + y
      }
      a.xxx = {yyy: {zzz: 1}}
      const a2 = deepClone(a)
      assert(a !== a2)
      assert(a.xxx !== a2.xxx)
      assert(a.xxx.yyy !== a2.xxx.yyy)
      assert(a.xxx.yyy.zzz === a2.xxx.yyy.zzz)
      assert(a(1, 2) === a2(1, 2))
    })
  })
})
