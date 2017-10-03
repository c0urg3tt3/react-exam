import React from 'react'
import { shallow } from 'enzyme'

import AppTitle from './component'

describe('[component] AppTitle', () => {
  it('should render component', () => {
    const wrapper = shallow(<AppTitle/>)

    expect(wrapper.exists()).toEqual(true)
    expect(wrapper.is('h1')).toEqual(true)
    expect(wrapper.hasClass('app-title')).toEqual(true)
    expect(wrapper.text()).toBe('Jedi List')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('with custom title', () => {
    const wrapper = shallow(<AppTitle title={"Sith List"}/>)

    expect(wrapper.exists()).toEqual(true)
    expect(wrapper.is('h1')).toEqual(true)
    expect(wrapper.hasClass('app-title')).toEqual(true)
    expect(wrapper.text()).toBe('Sith List')
    expect(wrapper.html()).toMatchSnapshot()
  })
})
