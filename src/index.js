import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/configureStore'

import './reset.css'

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
)
