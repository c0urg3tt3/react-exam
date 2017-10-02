import PropTypes from 'prop-types'
import React from 'react'

// https://vignette.wikia.nocookie.net/starwars/images/2/2f/Jedi_Order.svg/revision/latest?cb=20081203045753
import logo from './logo_jedi_order.svg'
import './style.css'

export default function AppLogo ({ imageURL, isAnimate }) {
  const imgClassNames = ['app-logo']

  if (isAnimate) {
    imgClassNames.push('rotate')
  }

  const imgProps = {
    src: imageURL,
    className: imgClassNames.join(' '),
  }

  return (<img alt="app logo" {...imgProps}/>)
}

AppLogo.propTypes = {
  imageURL: PropTypes.string,
  isAnimate: PropTypes.bool
}

AppLogo.defaultProps = {
  imageURL: logo,
  isAnimate: true
}
