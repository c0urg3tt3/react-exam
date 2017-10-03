import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Provider } from 'react-redux'

import App from './components/app/component'
import AppHeader from './components/app-header/component'
import AppLogo from './components/app-logo/component'
import AppTitle from './components/app-title/component'
import JediList from './components/jedi-list/component'
import JediListItem from './components/jedi-list-item/component'

import Jedi from './containers/jedi'

import './Root.css'

export default class Root extends Component {
  constructor () {
    super(...arguments)
    this.state = { error: null, hasError: false }
  }

  componentDidCatch (error) {
    this.setState({ error, hasError: true })
  }

  render() {
    const { error, hasError } = this.state

    return (hasError && error.toString()) || (
      <Provider store={this.props.store}>
        <App>
          <AppHeader>
            <AppLogo/>
            <AppTitle/>
          </AppHeader>

          <Jedi>
          {({jedies}) => (
            <JediList jedies={jedies}>
              {({jedies}) => jedies.map((jedi, index) => (
                <JediListItem key={index} jedi={jedi}/>
              ))}
            </JediList>
          )}
          </Jedi>
        </App>
      </Provider>
    )
  }
}

App.propTypes = {
  children: PropTypes.any
}

App.defaultProps = {
  children: null
}
