import PropTypes from 'prop-types'
import React from 'react'

import './style.css'

export default function AppHeader ({children}) {
  return (
    <header className="app-header">
      {children}
    </header>
  )
}

AppHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

AppHeader.defaultProps = {
  children: null
}
