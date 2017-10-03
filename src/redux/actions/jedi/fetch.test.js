import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import fetchJedi from './fetch'

import {
  JEDI_FETCH_REQUEST,
  JEDI_FETCH_SUCCESS,
  JEDI_FETCH_ERROR
} from './'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
let mockAxios

describe('[action] jedi/fetch', () => {
  beforeEach (() => {
    mockAxios = new MockAdapter(axios)
  })

  it('[async] fetch jedies success', (done) => {
    mockAxios
      .onGet('http://localhost:3001/jedi')
      .reply(200, [{id:42, name:'Jar Jar Bings'}])

    const expectedActions = [
      { type: JEDI_FETCH_REQUEST },
      { type: JEDI_FETCH_SUCCESS, payload: [{id:42, name:'Jar Jar Bings'}] }
    ]
    const store = mockStore({ jedi: { list: { data: [] }}})

    store.dispatch(fetchJedi()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
      done()
    })
  })

  it('[async] fetch jedies error', (done) => {
    mockAxios
      .onGet('http://localhost:3001/jedi')
      // .timeout()
      // .networkError()

    const expectedActions = [
      { type: JEDI_FETCH_REQUEST },
      { type: JEDI_FETCH_ERROR }
    ]
    const store = mockStore({ jedi: { list: { data: [] }}})

    store.dispatch(fetchJedi()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
      done()
    })
  })
})
