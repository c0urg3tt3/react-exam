import PropTypes from 'prop-types'
import React from 'react'
import './style.css'

export default function JediList ({ children, jedies }) {
  return (
    <ul className="jedi-list">
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
