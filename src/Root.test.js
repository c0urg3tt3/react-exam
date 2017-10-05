import React from 'react'
import { render, mount, shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {
  expectAppHeader,
  expectAppLogo,
  expectAppTitle,
  expectJediListLoader,
  // expectJedi,
  expectJediError,
  expectJediForm,
  expectJediFormField,
  expectJediFormButtonSubmit,
  expectJediListEmpty,
  expectJediList,
  expectJediListTitle,
  expectJediListItem,
  expectJediQuote
} from './utils/expectedComponents'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

import Root from './Root'

describe('Root', () => {
  it('should render component', () => {
    const store = mockStore({ jedi: { list: { jedies: [] }}})
    const wrapper = mount(<Root store={store}/>)

    expect(wrapper.exists()).toEqual(true)
    expect(wrapper.find('.app').exists()).toEqual(true)

    expectAppHeader({wrapper})
    expectAppLogo({wrapper: wrapper.find('AppHeader')})
    expectAppTitle({wrapper})
    expectJediForm({wrapper})
    expectJediFormField({
      wrapper,
      elementId: 'jedi-form-field_name',
      labelValue: "Add a Jedi to the Council",
      placeholder: "name",
      value: ""
    })
    expectJediFormButtonSubmit({
      wrapper,
      title: "Submit your padawan to the Council",
      isDisabled: true
    })
    expectAppLogo({
      wrapper: wrapper.find('JediFormButtonSubmit'),
      isAnimate: false
    })
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
    const wrapper = mount(<Root store={store}/>)

    expectJediList({wrapper, jedies})
    expectJediListTitle({wrapper})
    expectJediListItem({wrapper, jedi: jedies[0]})

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render list loader when jedi fetch in progress', () => {
    const store = mockStore({ jedi: { list: { isFetching: true }}})
    const wrapper = mount(<Root store={store}/>)

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
    const wrapper = mount(<Root store={store}/>)

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

  it('should render error when jedi post in failure', () => {
    const errorMessage = "death star destroyed !"
    const store = mockStore({ jedi: { list: {
      isPostingError: true,
      postingError: errorMessage
    }}})
    const wrapper = mount(<Root store={store}/>)

    expectJediError({
      wrapper,
      isPostingError: true,
      errorMessage: errorMessage
    })
    expectJediQuote({
      wrapper: wrapper.find('JediError'),
      message: errorMessage,
      quote: "The Council will act as they deem necessary.",
      autor: "Mace Windu"
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
