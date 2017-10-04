import PropTypes from 'prop-types'
import React from 'react'
import JediListTitle from '../jedi-list-title/component'
import './style.css'

export default function JediList ({ children, jedies }) {
  return (
    <ul className="jedi-list">
      <JediListTitle/>
      { children({jedies}) }
    </ul>
  )
}

JediList.propTypes = {
  children: PropTypes.func,
  jedies: PropTypes.array,
}

JediList.defaultProps = {
  children: () => null,
  jedies: [],
}
