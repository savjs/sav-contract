import test from 'ava'
import {expect} from 'chai'

import {Modal, get, post, head, put, patch, del} from '../../../src/utils/decorator.js'

test('decorator.api', (ava) => {
  expect(Modal).to.be.a('function')
  expect(get).to.be.a('function')
  expect(post).to.be.a('function')
  expect(head).to.be.a('function')
  expect(put).to.be.a('function')
  expect(patch).to.be.a('function')
  expect(del).to.be.a('function')

  @Modal()
  class Test {
    @get()
    get () {}
  }
  expect(Test).to.eql({routes: {get: {method: 'GET'}}})

  ava.pass()
})
