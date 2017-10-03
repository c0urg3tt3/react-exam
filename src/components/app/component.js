import PropTypes from 'prop-types'
import React from 'react'

import './style.css'

export default function App ({children}) {
  return (
    <div className="app">
      { children }
    </div>
  )
}

App.propTypes = {
  children: PropTypes.any
}

App.defaultProps = {
  children: null
}
