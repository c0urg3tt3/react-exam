import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import logo from './logo.svg'
import './App.css'

import fetchJedi from './action'

export class App extends Component {
  componentWillMount() {
    this.props.fetchJedi()
  }

  render() {
    const { jedi } = this.props

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Jedi List</h1>
        </header>
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
