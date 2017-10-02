import PropTypes from 'prop-types'
import React from 'react'
import './style.css'

export default function JediListItem ({jedi}) {
  return (
    <li className="jedi-list-item">
      <span>{jedi.id}</span>
      <span>{jedi.name}</span>
    </li>
  )
}

JediListItem.propTypes = {
  jed: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string
  }),
}

JediListItem.defaultProps = {
  jedi: { id: "", name: "" }
}
