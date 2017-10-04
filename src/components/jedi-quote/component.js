import PropTypes from 'prop-types'
import React from 'react'
import './style.css'

export default function JediQuote ({ message, quote, autor }) {
  return (
    <div className="jedi-quote">
      <p className="jedi-quote_message">{message}</p>
      <blockquote>
        <p className="jedi-quote_quote">{quote}</p>
        <footer className="jedi-quote_autor">{autor}</footer>
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
