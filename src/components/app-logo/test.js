import React from 'react'
import { shallow } from 'enzyme'

import AppLogo from './component'

describe('[component] AppLogo', () => {
  it('should render component', () => {
    const wrapper = shallow(<AppLogo/>)

    expect(wrapper.exists()).toEqual(true)
    expect(wrapper.is('img')).toEqual(true)
    expect(wrapper.hasClass('app-logo')).toEqual(true)
    expect(wrapper.hasClass('rotate')).toEqual(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('animation can be disabled', () => {
    const wrapper = shallow(<AppLogo/>)

    expect(wrapper.hasClass('rotate')).toEqual(true)
    expect(wrapper.html()).toMatchSnapshot()

    wrapper.setProps({ isAnimate: false })

    expect(wrapper.hasClass('rotate')).toEqual(false)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should replace logo src by imageURL prop', () => {
    const wrapper = shallow(<AppLogo/>)
    const src = wrapper.prop('src')
    const imageURL = "http://www.dark-vador.net/"

    expect(wrapper.html()).toMatchSnapshot()

    wrapper.setProps({ imageURL })

    expect(wrapper.prop('src')).not.toEqual(src)
    expect(wrapper.prop('src')).toEqual(imageURL)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
