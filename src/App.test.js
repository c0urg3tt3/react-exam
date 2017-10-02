import React from 'react'
import { shallow } from 'enzyme'

import { App } from './App'

describe('App', () => {

  it('should render component', () => {
    const wrapper = shallow(<App/>)

    expect(wrapper.exists()).toEqual(true)
    expect(wrapper.is('div')).toEqual(true)
    expect(wrapper.hasClass('App')).toEqual(true)

    const header = wrapper.find('.App-header')
    expect(header.exists()).toEqual(true)
    expect(header.is('header')).toEqual(true)

      const img = header.find('.App-logo')
      expect(img.exists()).toEqual(true)
      expect(img.prop('alt')).toEqual('logo')

      const h1 = header.find('h1')
      expect(h1.exists()).toEqual(true)
      expect(h1.text()).toEqual('Jedi List')

    const list = wrapper.find('.App-list')
    expect(list.exists()).toEqual(true)
    expect(list.is('ul')).toEqual(true)

    const listItems = wrapper.find('.App-list-item')
    expect(listItems.length).toEqual(0)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should call fetchJedi when commponent mount', () => {
    const appProps = {
      fetchJedi: jest.fn()
    }
    const wrapper = shallow(<App {...appProps}/>)

    expect(appProps.fetchJedi.mock.calls.length).toBe(1)
  })

  it('should render list item when jedi fetch success', () => {
    const appProps = {
      jedi: [
        {id: 42, name: 'Jar Jar Bings'},
        {id: 1337, name: 'Anakin Skywalkers'}
      ]
    }
    const wrapper = shallow(<App {...appProps}/>)

    const listItems = wrapper.find('.App-list-item')
    expect(listItems.length).toEqual(2)
    expect(listItems.first().is('li')).toEqual(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
