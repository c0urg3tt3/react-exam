import PropTypes from 'prop-types'
import React from 'react'

import './style.css'

export const BOUNDARY_ERROR_QUOTE = {
  quote: "I felt a great disturbance in the Force, as if millions of voices suddenly cried out in terror and were suddenly silenced. I fear something terrible has happened.",
  autor: "Obi-Wan Kenobi"
}

export const FETCHING_ERROR_QUOTE = {
  quote: "What if I told you that the Republic was now under the control of a Dark Lord of the Sith?",
  autor: "Count Dooku"
}

export default function JediError (props) {
  const { children, errorMessage, isBoundaryError, isFetchingError } = props

  const quote = errorMessage !== "" && ( isBoundaryError
    ? BOUNDARY_ERROR_QUOTE
    : ( isFetchingError
      ? FETCHING_ERROR_QUOTE
      : false
    )
  )

  return quote && (
    <div className="jedi-error">
      { children({ message: errorMessage, ...quote }) }
    </div>
  )
}

JediError.propTypes = {
  children: PropTypes.func,
  errorMessage: PropTypes.string,
  isBoundaryError: PropTypes.bool,
  isFetchingError: PropTypes.bool
}

JediError.defaultProps = {
  children: () => null,
  errorMessage: "",
  isBoundaryError: false,
  isFetchingError: false
}
