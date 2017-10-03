import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'
import store from './redux/configureStore'

import './reset.css'

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
)
