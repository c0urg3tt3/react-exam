import PropTypes from 'prop-types'
import React from 'react'

import './style.css'

export const emptyQuoteProps = {
  message: "Looks like someone executed Order 66 !",
  quote: "Master sky walker there is too many of them what are we going to do?",
  autor: "Padawan"
}

export default function JediListEmpty ({children}) {
  return (
    <div className="jedi-list-empty">
      { children(emptyQuoteProps) }
    </div>
  )
}

JediListEmpty.propTypes = {
  children: PropTypes.func,
}

JediListEmpty.defaultProps = {
  children: () => null,
}
