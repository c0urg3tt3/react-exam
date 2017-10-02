import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import fetchJedi, { FETCH_FINISH, FETCH_ERROR } from './action'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
let mockAxios

describe('[action] fetchJedi', () => {
  beforeEach (() => {
    mockAxios = new MockAdapter(axios)
  })

  it('[async] fetch jedies success', (done) => {
    mockAxios
      .onGet('http://localhost:3001/jedi')
      .reply(200, [{id:42, name:'Jar Jar Bings'}])

    const expectedActions = [
      { type: FETCH_FINISH, payload: [{id:42, name:'Jar Jar Bings'}] }
    ]
    const store = mockStore({ jedi: []})

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
      { type: FETCH_ERROR, error: "Error: Request failed with status code 404" }
    ]
    const store = mockStore({ jedi: []})

    store.dispatch(fetchJedi()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
      done()
    })
  })
})
