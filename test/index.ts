import * as chai from 'chai'
import { describe, it } from 'mocha'
import deepClone from '../src/deepClone'
import * as sinon from 'sinon'
import * as sinonChai from 'sinon-chai'

const assert = chai.assert
chai.use(sinonChai)

describe('deepClone', () => {
  it('是一个函数', () => {
    assert.isFunction(deepClone)
  })
})
