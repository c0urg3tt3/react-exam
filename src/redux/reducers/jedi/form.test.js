import reducer from './form'
import {
  JEDI_ADD_REQUEST,
  JEDI_ADD_SUCCESS,
  JEDI_ADD_ERROR
} from '../../actions'

describe('[reducer] jedi/form', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isPosting: false,
      isPostingError: false,
      postingError: ""
    })
  })

  it('should handle JEDI_ADD_REQUEST', () => {
    expect(
      reducer({
        isPosting: false,
        isPostingError: true,
        postingError: ""
      }, {
        type: JEDI_ADD_REQUEST
      })
    ).toEqual({
      isPosting: true,
      isPostingError: false,
      postingError: ""
    })
  })

  it('should handle JEDI_ADD_SUCCESS', () => {
    expect(
      reducer({
        isPosting: true,
        isPostingError: false,
        postingError: ""
      }, {
        type: JEDI_ADD_SUCCESS,
        payload: { id: 42, name: 'Jar Jar Bings' }
      })
    ).toEqual({
      isPosting: false,
      isPostingError: false,
      postingError: ""
    })
  })

  it('should handle JEDI_ADD_ERROR', () => {
    const errorMessage = "Wrong something went!"
    expect(
      reducer({
        isPosting: true,
        isPostingError: false,
        postingError: ""
      }, {
        type: JEDI_ADD_ERROR,
        errorMessage
      })
    ).toEqual({
      isPosting: false,
      isPostingError: true,
      postingError: errorMessage
    })
  })
})
