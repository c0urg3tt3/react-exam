import PropTypes from 'prop-types'
import React from 'react'
import './style.css'

export default function JediFormField (props) {
  const { elementId, value, labelValue, placeholder, onChange } = props

  return (
    <div className="jedi-form-field">
      <label
        className="jedi-form-field-label"
        htmlFor={elementId}
      >
        { labelValue }
      </label>
      <input
        className="jedi-form-field-input"
        id={elementId}
        name={elementId}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}

JediFormField.propTypes = {
  elementId: PropTypes.string,
  value: PropTypes.string,
  labelValue: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}

JediFormField.defaultProps = {
  elementId: "input",
  value: "",
  labelValue: "label",
  placeholder: "placeholder",
  onChange: () => null
}
