import PropTypes from 'prop-types'
import React from 'react'
import './style.css'

export default function JediQuote ({ message, quote, autor }) {
  return (
    <div className="jedi-quote">
      <p>{message}</p>
      <blockquote>
        <p>{quote}</p>
        <footer>{autor}</footer>
      </blockquote>
    </div>
  )
}

JediQuote.propTypes = {
  message: PropTypes.string,
  quote: PropTypes.string,
  autor: PropTypes.string
}

JediQuote.defaultProps = {
  message: "",
  quote: "",
  autor: ""
}
