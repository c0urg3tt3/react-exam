import PropTypes from 'prop-types'
import React, { Component } from 'react'

import AppLogo from '../app-logo/component'
import JediError from '../jedi-error/component'
import JediForm from '../jedi-form/component'
import JediFormField from '../jedi-form-field/component'
import JediFormButtonSubmit from '../jedi-form-button-submit/component'
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
    const { children, jedies, addJedi } = this.props
    const { isFetching, isFetchingError, fetchingError } = this.props
    const { isPosting, isPostingError, postingError } = this.props
    const { isBoundaryError, boundaryError } = this.state
    const errorMessage = isBoundaryError
      ? boundaryError
      : ( isFetchingError
        ? fetchingError
        : ( isPostingError
          ? postingError
          : ""
        )
      )
    const isEmptyList = !jedies.length
    let hasError = false

    if (errorMessage !== "") {
      classNames.push('error')
      hasError = true
    }

    return (
      <div className={classNames.join(' ')}>
      {hasError && (
        <JediError
          key="JediError-0"
          isBoundaryError={isBoundaryError}
          isFetchingError={isFetchingError}
          errorMessage={errorMessage}
        >
          {(quoteProps) => (
            <JediQuote {...quoteProps}/>
          )}
        </JediError>
      )}
        <JediForm addJedi={addJedi} isPosting={isPosting}>
        {({fieldName, submitButtonIsDisabled}) => [(
          <JediFormField
            key="JediFormField-0"
            elementId='jedi-form-field_name'
            labelValue="Add a Jedi to the Council"
            placeholder="name"
            {...fieldName}
          />
        ), (
          <JediFormButtonSubmit
            key="JediFormButtonSubmit-0"
            isDisabled={submitButtonIsDisabled}
          >
            <AppLogo isAnimate={false}/>
          </JediFormButtonSubmit>
        )]}
        </JediForm>

      {(isFetching && (
        <JediListLoader>
        {(quoteProps) => (
          <JediQuote {...quoteProps}/>
        )}
        </JediListLoader>
      ))
      || (isEmptyList && (
        <JediListEmpty>
        {(quoteProps) => (
          <JediQuote {...quoteProps}/>
        )}
        </JediListEmpty>
      ))
      || children({jedies})}
      </div>
    )
  }
}

Jedi.propTypes = {
  jedies: PropTypes.array,
  isFetching: PropTypes.bool,
  isFetchingError: PropTypes.bool,
  fetchingError: PropTypes.string,
  isPosting: PropTypes.bool,
  isPostingError: PropTypes.bool,
  postingError: PropTypes.string,
  addJedi: PropTypes.func,
  fetchJedi: PropTypes.func,
  children: PropTypes.func
}

Jedi.defaultProps = {
  jedies: [],
  isFetching: false,
  isFetchingError: false,
  fetchingError: "",
  isPosting: false,
  isPostingError: false,
  postingError: "",
  addJedi: x => x,
  fetchJedi: x => x,
  children: () => null
}
