import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import './style.css'

export default class JediForm extends PureComponent {
  constructor () {
    super(...arguments)
    this.state = { inputNameValue: ''}
    this.handleSubmit = this._handleSubmit.bind(this)
    this.inputNameHandleChange = this._inputNameHandleChange.bind(this)
  }

  _handleSubmit (event) {
    const { inputNameValue } = this.state
    const { isPosting, addJedi } = this.props
    const hasValue = !isPosting && (inputNameValue.trim().length > 0)

    if (hasValue) {
      addJedi(inputNameValue)
      this.setState({inputNameValue: ''})
    }

    if (event) {
      event.preventDefault()
    }
  }

  _inputNameHandleChange (event) {
    this.setState({
      inputNameValue: (!!event && !!event.target && event.target.value) || ""
    })
  }

  render() {
    const { props, state, handleSubmit, inputNameHandleChange } = this
    const { inputNameValue } = state
    const { children, isPosting } = props
    const fieldName = {
      value: inputNameValue,
      handleChange: inputNameHandleChange
    }
    const submitButtonIsDisabled = (isPosting || (inputNameValue.length === 0)) ? true : null

    return (
      <form
        className="jedi-form"
        onSubmit={handleSubmit}
      >
        {children({fieldName, submitButtonIsDisabled})}
      </form>
    )
  }
}

JediForm.propTypes = {
  isPosting: PropTypes.bool,
  addJedi: PropTypes.func,
  children: PropTypes.func
}

JediForm.defaultProps = {
  isPosting: false,
  addJedi: () => null,
  children: () => null
}
