import PropTypes from 'prop-types'
import React from 'react'

import './style.css'

export default function AppTitle ({title}) {
  return (
    <h1 className="app-title">
      {title}
    </h1>
  )
}

AppTitle.propTypes = {
  title: PropTypes.string
}

AppTitle.defaultProps = {
  title: "Jedi List"
}
