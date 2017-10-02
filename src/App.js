import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import './App.css'

import fetchJedi from './action'

import AppHeader from './components/app-header/component'
import AppLogo from './components/app-logo/component'
import AppTitle from './components/app-title/component'

export class App extends Component {
  componentWillMount() {
    this.props.fetchJedi()
  }

  render() {
    const { jedi } = this.props

    return (
      <div className="App">
        <AppHeader>
          <AppLogo/>
          <AppTitle/>
        </AppHeader>
        <ul className="App-list">
          {jedi.map((jedi, index) => (
            <li key={index} className="App-list-item">
              Jedi: id: {jedi.id} name: {jedi.name}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

App.propTypes = {
  jedi: PropTypes.array,
  fetchJedi: PropTypes.func,
}

App.defaultProps = {
  jedi: [],
  fetchJedi: noop => noop
}

function mapStateToProps(state) {
  return {
    jedi: state.jedi,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchJedi: () => dispatch(fetchJedi()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
