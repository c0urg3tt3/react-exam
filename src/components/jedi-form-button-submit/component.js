import PropTypes from 'prop-types'
import React from 'react'

import './style.css'

export default function JediFormButtonSubmit ({ children, isDisabled, title }) {
  let _title = title
  if (isDisabled) {
    _title = `[disabled] ${title}`
  }

  return (
    <button
      className="jedi-form-button-submit"
      type="submit"
      title={_title}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}

JediFormButtonSubmit.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  isDisabled: PropTypes.bool,
  title: PropTypes.string
}

JediFormButtonSubmit.defaultProps = {
  children: null,
  isDisabled: true,
  title: "Submit your padawan to the Council"
}
