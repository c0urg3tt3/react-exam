import React from 'react'
import { shallow } from 'enzyme'

import AppHeader from './component'

describe('[component] AppHeader', () => {
  it('should render component', () => {
    const wrapper = shallow(<AppHeader />)

    expect(wrapper.exists()).toEqual(true)
    expect(wrapper.is('header')).toEqual(true)
    expect(wrapper.hasClass('app-header')).toEqual(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render child', () => {
    const wrapper = shallow(
      <AppHeader>
        <h1>Jedi List</h1>
      </AppHeader>
    )

    expect(wrapper.find('h1').text()).toEqual("Jedi List")
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render children', () => {
    const wrapper = shallow(
      <AppHeader>
        <img className="child" />
        <h1>Jedi List</h1>
      </AppHeader>
    )

    expect(wrapper.find('img').hasClass("child")).toEqual(true)
    expect(wrapper.find('h1').text()).toEqual("Jedi List")
    expect(wrapper.html()).toMatchSnapshot()
  })
})
