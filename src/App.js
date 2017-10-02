import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import './App.css'

import fetchJedi from './redux/actions/jedi/fetch'

import AppHeader from './components/app-header/component'
import AppLogo from './components/app-logo/component'
import AppTitle from './components/app-title/component'
import JediError from './components/jedi-error/component'
import JediList from './components/jedi-list/component'
import JediListItem from './components/jedi-list-item/component'
import JediListEmpty from './components/jedi-list-empty/component'
import JediListLoader from './components/jedi-list-loader/component'
import JediQuote from './components/jedi-quote/component'

export class App extends Component {
  componentWillMount() {
    this.props.fetchJedi()
  }

  render() {
    const { jedies, isFetching, isFetchingError, errorMessage } = this.props

    return (
      <div className="app">
        <AppHeader>
          <AppLogo/>
          <AppTitle/>
        </AppHeader>
        {(isFetchingError && (
          <JediError isFetchingError={isFetchingError} errorMessage={errorMessage}>
          {(quoteProps) => (
            <JediQuote {...quoteProps}/>
          )}
          </JediError>
        ))}
        {(isFetching && (
          <JediListLoader>
          {(quoteProps) => (
            <JediQuote {...quoteProps}/>
          )}
          </JediListLoader>
        ))
        || (!jedies.length && (
          <JediListEmpty>
          {(quoteProps) => (
            <JediQuote {...quoteProps}/>
          )}
          </JediListEmpty>
        ))
        || (
          <JediList jedies={jedies}>
          {({jedies}) => jedies.map((jedi, index) => (
            <JediListItem key={index} jedi={jedi}/>
          ))}
          </JediList>
        )}
      </div>
    )
  }
}

App.propTypes = {
  jedies: PropTypes.array,
  isFetching: PropTypes.bool,
  isFetchingError: PropTypes.bool,
  fetchJedi: PropTypes.func,
}

App.defaultProps = {
  jedies: [],
  isFetching: false,
  isFetchingError: true,
  fetchJedi: noop => noop
}

function mapStateToProps(state) {
  return { ...state.jedi.list }
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
