import reducer from './list'
import {
  JEDI_FETCH_REQUEST,
  JEDI_FETCH_SUCCESS,
  JEDI_FETCH_ERROR,
  JEDI_ADD_SUCCESS
} from '../../actions'

describe('[reducer] jedi/list', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      jedies: [],
      isFetching: false,
      isFetchingError: false,
      fetchingError: ""
    })
  })

  it('should handle JEDI_FETCH_REQUEST', () => {
    expect(
      reducer({
        jedies: [],
        isFetching: false,
        isFetchingError: true,
        fetchingError: ""
      }, {
        type: JEDI_FETCH_REQUEST
      })
    ).toEqual({
      jedies: [],
      isFetching: true,
      isFetchingError: false,
      fetchingError: ""
    })
  })

  it('should handle JEDI_FETCH_SUCCESS', () => {
    expect(
      reducer({
        jedies: [],
        isFetching: true,
        isFetchingError: false,
        fetchingError: ""
      }, {
        type: JEDI_FETCH_SUCCESS,
        payload: [
          { id: 4200, name: 'Jar Jar Bings'},
          { id: 1337, name: 'Anakin Skywalker' },
          { id: 42, name: 'Palpatine' }
        ]
      })
    ).toEqual({
      jedies: [
        { id: 4200, name: 'Jar Jar Bings'},
        { id: 1337, name: 'Anakin Skywalker' },
        { id: 42, name: 'Palpatine' }
      ],
      isFetching: false,
      isFetchingError: false,
      fetchingError: ""
    })
  })

  it('should handle JEDI_FETCH_ERROR', () => {
    const errorMessage = "Wrong something went!"
    expect(
      reducer({
        jedies: [],
        isFetching: true,
        isFetchingError: false,
        fetchingError: ""
      }, {
        type: JEDI_FETCH_ERROR,
        errorMessage
      })
    ).toEqual({
      jedies: [],
      isFetching: false,
      isFetchingError: true,
      fetchingError: errorMessage
    })
  })

  it('should handle JEDI_ADD_SUCCESS (append payload to data)', () => {
    expect(
      reducer({
        jedies: [
          { id: 1337, name: 'Anakin Skywalker' },
          { id: 42, name: 'Palpatine' }
        ],
        isFetching: false,
        isFetchingError: false,
        fetchingError: ""
      }, {
        type: JEDI_ADD_SUCCESS,
        payload: { id: 4200, name: 'Jar Jar Bings' }
      })
    ).toEqual({
      jedies: [
        { id: 4200, name: 'Jar Jar Bings'},
        { id: 1337, name: 'Anakin Skywalker' },
        { id: 42, name: 'Palpatine' }
      ],
      isFetching: false,
      isFetchingError: false,
      fetchingError: ""
    })
  })
})
