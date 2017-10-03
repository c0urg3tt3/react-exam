import React from 'react'
import { mount, shallow } from 'enzyme'

import JediForm from './component'

describe('[component] JediForm', () => {
  it('should render component', () => {
    const wrapper = shallow(<JediForm/>)

    expect(wrapper.exists()).toEqual(true)
    expect(wrapper.is('form')).toEqual(true)
    expect(wrapper.hasClass('jedi-form')).toEqual(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should trigger addJedi on submit when not disabled', () => {
    const mockAddJedi = jest.fn()
    const wrapper = shallow(
      <JediForm addJedi={mockAddJedi}>
      {({inputNameValue, inputNameHandleChange}) => (
        <input
          className="jedi-form-field-input"
          id="jedi-name"
          name="jedi-name"
          value={inputNameValue}
          placeholder="name"
          onChange={inputNameHandleChange}
        />
      )}
      </JediForm>
    )

    wrapper.find('input').simulate('change', { target: { value: ' '}})
    wrapper.find('form').simulate('submit')

    expect(mockAddJedi.mock.calls.length).toBe(0)
    expect(wrapper.html()).toMatchSnapshot()

    wrapper.find('input').simulate('change', { target: { value: 'Bings'}})
    wrapper.find('form').simulate('submit')

    expect(mockAddJedi.mock.calls.length).toBe(1)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should disable the submit button when is posting or the value is empty', () => {
    const wrapper = shallow(
      <JediForm>
      {({inputNameValue, inputNameHandleChange, submitButtonIsDisabled}) => [(
        <input
          key="JediFormInput-0"
          className="jedi-form-field-input"
          id="jedi-name"
          name="jedi-name"
          value={inputNameValue}
          placeholder="name"
          onChange={inputNameHandleChange}
        />
      ), (
        <button
          key="JediFormButtonSubmit-0"
          className="jedi-form-button-submit"
          disabled={submitButtonIsDisabled}
        >
          +
        </button>
      )]}
      </JediForm>
    )

    expect(wrapper.find('button').prop('disabled')).toEqual(true)
    expect(wrapper.html()).toMatchSnapshot()

    wrapper.find('input').simulate('change', { target: { value: 'Jar Jar Bings'}})

    expect(wrapper.find('button').prop('disabled')).toEqual(null)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
