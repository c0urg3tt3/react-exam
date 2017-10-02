import PropTypes from 'prop-types'
import React from 'react'

import './style.css'

export const FETCHING_ERROR_QUOTE = {
  quote: "What if I told you that the Republic was now under the control of a Dark Lord of the Sith?",
  autor: "Count Dooku"
}

export default function JediError (props) {
  const { children, errorMessage, isFetchingError } = props

  const quote = errorMessage !== "" && ( isFetchingError
    ? FETCHING_ERROR_QUOTE
    : false
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
  isFetchingError: PropTypes.bool
}

JediError.defaultProps = {
  children: () => null,
  errorMessage: "",
  isFetchingError: false
}
