import PropTypes from 'prop-types'
import React, { Component } from 'react'

import JediError from '../jedi-error/component'
import JediListEmpty from '../jedi-list-empty/component'
import JediListLoader from '../jedi-list-loader/component'
import JediQuote from '../jedi-quote/component'

import './style.css'

export default class Jedi  extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      isBoundaryError: false,
      boundaryError: ""
    }
  }

  componentDidCatch (error) {
    // console.error(error)
    this.setState({ isBoundaryError: true, boundaryError: error.toString()  })
  }

  componentWillMount() {
    this.props.fetchJedi()
  }

  render () {
    const classNames = ['jedi']
    const { children, jedies, fetchJedi } = this.props
    const { isFetching, isFetchingError, fetchingError } = this.props
    const { isBoundaryError, boundaryError } = this.state
    const errorMessage = isBoundaryError
      ? boundaryError
      : ( isFetchingError
        ? fetchingError
        : ""
      )
    const isEmptyList = !jedies.length

    if (errorMessage !== "") {
      classNames.push('error')
    }

    return (
      <div className={classNames.join(' ')}>
        <JediError
          key="JediError-0"
          isBoundaryError={isBoundaryError}
          isFetchingError={isFetchingError}
          errorMessage={errorMessage}>
          {(quoteProps) => (
            <JediQuote {...quoteProps}/>
          )}
        </JediError>
        {
          (isFetching && (
            <JediListLoader>
              {(quoteProps) => (
                <JediQuote {...quoteProps}/>
              )}
            </JediListLoader>
          )) || (!jedies.length && (
            <JediListEmpty>
              {(quoteProps) => (
                <JediQuote {...quoteProps}/>
              )}
            </JediListEmpty>
          )) || children({jedies})
        }
      </div>
    )
  }
}

Jedi.propTypes = {
  jedies: PropTypes.array,
  isFetching: PropTypes.bool,
  isFetchingError: PropTypes.bool,
  fetchingError: PropTypes.string,
  fetchJedi: PropTypes.func,
  children: PropTypes.func
}

Jedi.defaultProps = {
  jedies: [],
  isFetching: false,
  isFetchingError: false,
  fetchingError: "",
  fetchJedi: x => x,
  children: () => null
}
