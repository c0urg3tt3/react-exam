import React from 'react'
import { shallow } from 'enzyme'

import JediFormButtonSubmit from './component'

describe('[component] JediFormButtonSubmit', () => {
  it('should render component', () => {
    const wrapper = shallow(<JediFormButtonSubmit />)

    expect(wrapper.exists()).toEqual(true)
    expect(wrapper.is('button')).toEqual(true)
    expect(wrapper.hasClass('jedi-form-button-submit')).toEqual(true)
    expect(wrapper.prop('type')).toBe('submit')
    expect(wrapper.prop('title')).toBe('[disabled] Submit your padawan to the Council')
    expect(wrapper.prop('disabled')).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should enable the button', () => {
    const wrapper = shallow(<JediFormButtonSubmit />)

    expect(wrapper.prop('disabled')).toBe(true)
    expect(wrapper.prop('title')).toBe('[disabled] Submit your padawan to the Council')
    expect(wrapper.html()).toMatchSnapshot()

    wrapper.setProps({isDisabled: false})

    expect(wrapper.prop('disabled')).toBe(false)
    expect(wrapper.prop('title')).toBe('Submit your padawan to the Council')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should accept child', () => {
    const wrapper = shallow(
      <JediFormButtonSubmit>
        <img alt="child"/>
      </JediFormButtonSubmit>
    )

    expect(wrapper.find('img')).toHaveLength(1)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should accept children', () => {
    const wrapper = shallow(
      <JediFormButtonSubmit>
        <img alt="child"/>
        <img alt="child"/>
      </JediFormButtonSubmit>
    )

    expect(wrapper.find('img')).toHaveLength(2)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
