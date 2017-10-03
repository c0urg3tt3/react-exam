import React from 'react'
import { shallow } from 'enzyme'

import App from './component'

describe('[component] App', () => {
  it('should render component', () => {
    const wrapper = shallow(<App/>)

    expect(wrapper.exists()).toEqual(true)
    expect(wrapper.is('div')).toEqual(true)
    expect(wrapper.hasClass('app')).toEqual(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render children', () => {
    const wrapper = shallow(
      <App>
        <header>Sith List</header>
        <main>Who know ?</main>
      </App>
    )

    expect(wrapper.exists()).toEqual(true)
    expect(wrapper.find('header').text()).toEqual("Sith List")
    expect(wrapper.find('main').text()).toEqual("Who know ?")
    expect(wrapper.html()).toMatchSnapshot()
  })
})
