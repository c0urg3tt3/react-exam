import React from 'react'
import { shallow } from 'enzyme'

import { App } from './App'

describe('App', () => {

  it('should render component', () => {
    const wrapper = shallow(<App/>)
    console.log(wrapper.debug())
    expect(wrapper.exists()).toEqual(true)
    expect(wrapper.is('div')).toEqual(true)
    expect(wrapper.hasClass('app')).toEqual(true)

    const header = wrapper.find('AppHeader')
    expect(header.exists()).toEqual(true)

      const img = header.find('AppLogo')
      expect(img.exists()).toEqual(true)
      expect(img.prop('imageURL')).toEqual("logo_jedi_order.svg")
      expect(img.prop('isAnimate')).toEqual(true)

      const h1 = wrapper.find('AppTitle')
      expect(h1.exists()).toEqual(true)
      expect(h1.prop('title')).toEqual("Jedi List")

    const list = wrapper.find('.app-list')
    expect(list.exists()).toEqual(false)

    const listEmpty = wrapper.find('JediListEmpty')
    expect(listEmpty.exists()).toBe(true)

    const listItems = wrapper.find('JediListItem')
    expect(listItems.exists()).toBe(false)

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
      jedies: [
        {id: 42, name: 'Jar Jar Bings'},
        {id: 1337, name: 'Anakin Skywalkers'}
      ]
    }
    const wrapper = shallow(<App {...appProps}/>)

    const list = wrapper.find('JediList')
    expect(list.exists()).toBe(true)
    expect(list.prop('jedies')).toHaveLength(2)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render list loader when jedi fetch in progress', () => {
    const appProps = {
      isFetching: true
    }
    const wrapper = shallow(<App {...appProps}/>)

    const listLoader = wrapper.find('JediListLoader')
    expect(listLoader.exists()).toBe(true)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render error when jedi fetch in failure', () => {
    const appProps = {
      isFetchingError: true,
      errorMessage: "oops!",
    }
    const wrapper = shallow(<App {...appProps}/>)

    const error = wrapper.find('JediError')
    expect(error.exists()).toBe(true)
    expect(error.prop('isFetchingError')).toBe(true)
    expect(error.prop('errorMessage')).toBe("oops!")

    expect(wrapper.html()).toMatchSnapshot()
  })
})
