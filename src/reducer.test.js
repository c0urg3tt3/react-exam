import reducer from './reducer'
import { FETCH_FINISH } from './action'

const initialState = { jedi: [] }

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle FETCH_FINISH', () => {
    expect(
      reducer(initialState, {
        type: FETCH_FINISH,
        payload: [
          { id: 4200, name: 'Jar Jar Bings'},
          { id: 1337, name: 'Anakin Skywalker' },
          { id: 42, name: 'Palpatine' }
        ]
      })
    ).toEqual({
      jedi: [
        { id: 4200, name: 'Jar Jar Bings'},
        { id: 1337, name: 'Anakin Skywalker' },
        { id: 42, name: 'Palpatine' }
      ]
    })
  })
})
