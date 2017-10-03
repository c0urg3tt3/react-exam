import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import './style.css'

export default class JediForm extends PureComponent {
  constructor () {
    super(...arguments)
    this.state = { value: ''}
    this.handleChange = this._handleChange.bind(this)
    this.handleSubmit = this._handleSubmit.bind(this)
  }

  _handleChange (event) {
    this.setState({
      value: (!!event && !!event.target && event.target.value) || ""
    })
  }

  _handleSubmit (event) {
    const { value } = this.state
    const { isPosting, addJedi } = this.props
    const hasValue = !isPosting && (value.trim().length > 0)

    if (hasValue) {
      addJedi(value)
      this.setState({value: ''})
    }

    if (event) {
      event.preventDefault()
    }
  }

  render() {
    const { props, state, handleSubmit, handleChange: inputNameHandleChange } = this
    const { value: inputNameValue } = state
    const { children, isPosting } = props

    const submitButtonIsDisabled = (isPosting || (inputNameValue.length === 0)) ? true : null

    return (
      <form
        className="jedi-form"
        onSubmit={handleSubmit}
      >
        {children({inputNameValue, inputNameHandleChange, submitButtonIsDisabled})}
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
