import React from 'react'
import { shallow } from 'enzyme'

import JediFormField from './component'

describe('[component] JediFormField', () => {
  it('should render component', () => {
    const wrapper = shallow(<JediFormField/>)

    expect(wrapper.exists()).toEqual(true)
    expect(wrapper.is('div')).toEqual(true)
    expect(wrapper.hasClass('jedi-form-field')).toEqual(true)

    const label = wrapper.find('.jedi-form-field-label')
    expect(label.exists()).toBe(true)
    expect(label.is('label')).toEqual(true)
    expect(label.prop('htmlFor')).toEqual('input')

    const input = wrapper.find('.jedi-form-field-input')
    expect(input.exists()).toBe(true)
    expect(input.is('input')).toEqual(true)
    expect(input.prop('name')).toBe('input')
    expect(input.prop('value')).toBe('')
    expect(input.prop('placeholder')).toBe('placeholder')

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should call onChange when input value change', () => {
    const onChange = jest.fn()
    const wrapper = shallow(<JediFormField onChange={onChange}/>)

    expect(onChange.mock.calls.length).toBe(0);

    wrapper.find('input').simulate('change', { target: { value: 'Jar Jar Bings'}})

    expect(onChange.mock.calls.length).toBe(1);
  })
})
