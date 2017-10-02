import PropTypes from 'prop-types'
import React from 'react'

import './style.css'

export const loaderQuoteProps = {
  message: "C3PO is fetching jedi list ...",
  quote: "hnnnhrrhhh huurh uughghhhgh raaaaaahhgh uughguughhhghghghhhgh",
  autor: "Chewbacca"
}

export default function JediListLoader ({children}) {
  return (
    <div className="jedi-list-loader">
      { children(loaderQuoteProps)}
    </div>
  )
}

JediListLoader.propTypes = {
  children: PropTypes.func,
}

JediListLoader.defaultProps = {
  children: () => null,
}
