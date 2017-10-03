import React from 'react'
import { mount, shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {
  expectAppHeader,
  expectAppLogo,
  expectAppTitle,
  expectJediListLoader,
  // expectJedi,
  expectJediError,
  expectJediListEmpty,
  expectJediList,
  expectJediListItem,
  expectJediQuote
} from './utils/expectedComponents'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

import App from './App'

describe('App', () => {
  it('should render component', () => {
    const store = mockStore({ jedi: { list: { jedies: [] }}})
    const wrapper = mount(<App store={store}/>)

    expect(wrapper.exists()).toEqual(true)
    expect(wrapper.find('.app').exists()).toEqual(true)

    expectAppHeader({wrapper})
    expectAppLogo({wrapper})
    expectAppTitle({wrapper})
    expectJediList({wrapper, exist: false})
    expectJediListItem({wrapper, exist: false})
    expectJediListEmpty({wrapper})
    expectJediQuote({
      wrapper: wrapper.find('JediListEmpty'),
      message: "Looks like someone executed Order 66 !",
      quote: "Master sky walker there is too many of them what are we going to do?",
      autor: "Padawan"
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render list item when jedi fetch success', () => {
    const jedies = [
      {id: 42, name: 'Jar Jar Bings'},
      {id: 1337, name: 'Anakin Skywalkers'}
    ]
    const store = mockStore({ jedi: { list: { jedies }}})
    const wrapper = mount(<App store={store}/>)

    expectJediList({wrapper, jedies})
    expectJediListItem({wrapper, jedi: jedies[0]})

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render list loader when jedi fetch in progress', () => {
    const store = mockStore({ jedi: { list: { isFetching: true }}})
    const wrapper = mount(<App store={store}/>)

    expectJediListLoader({wrapper})
    expectJediQuote({
      wrapper: wrapper.find('JediListLoader'),
      message: "C3PO is fetching jedi list ...",
      quote: "hnnnhrrhhh huurh uughghhhgh raaaaaahhgh uughguughhhghghghhhgh",
      autor: "Chewbacca"
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render error when jedi fetch in failure', () => {
    const errorMessage = "death star destroyed !"
    const store = mockStore({ jedi: { list: {
      isFetchingError: true,
      fetchingError: errorMessage
    }}})
    const wrapper = mount(<App store={store}/>)

    expectJediError({
      wrapper,
      isFetchingError: true,
      errorMessage: errorMessage
    })
    expectJediQuote({
      wrapper: wrapper.find('JediError'),
      message: errorMessage,
      quote: "What if I told you that the Republic was now under the control of a Dark Lord of the Sith?",
      autor: "Count Dooku"
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
