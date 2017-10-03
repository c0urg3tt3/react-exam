import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import addJedi from './add'

import {
  JEDI_ADD_REQUEST,
  JEDI_ADD_SUCCESS,
  JEDI_ADD_ERROR
} from './'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
let mockAxios

describe('[action] jedi/add', () => {
  beforeEach (() => {
    mockAxios = new MockAdapter(axios)
  })

  it('[async] add jedi success', (done) => {
    mockAxios
      .onPost('http://localhost:3001/jedi')
      .reply(200, {id:42, name:'Jar Jar Bings'})

    const expectedActions = [
      { type: JEDI_ADD_REQUEST },
      { type: JEDI_ADD_SUCCESS, payload: {id:42, name:'Jar Jar Bings'}}
    ]
    const store = mockStore({ jedi: { list: { data: [] }}})

    store.dispatch(addJedi('Jar Jar Bings')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
      done()
    })
  })

  it('[async] add jedi fail', (done) => {
    mockAxios
      .onPost('http://localhost:3001/jedi')
      .timeout()
      // .networkError()

    const expectedActions = [
      { type: JEDI_ADD_REQUEST },
      { type: JEDI_ADD_ERROR, errorMessage: "Error: timeout of 0ms exceeded" }
    ]
    const store = mockStore({ jedi: { list: { data: [] }}})

    store.dispatch(addJedi('Jar Jar Bings')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
      done()
    })
  })
})
