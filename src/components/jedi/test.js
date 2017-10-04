import React from 'react'
import { shallow } from 'enzyme'

import Jedi from './component'

import {
  expectJediListLoader,
  expectJediError,
  expectJediListEmpty,
  expectJediQuote
} from '../../utils/expectedComponents'

describe('[component] Jedi', () => {
  it('should render component', () => {
    const wrapper = shallow(<Jedi/>)

    expect(wrapper.exists()).toEqual(true)
    expect(wrapper.is('div')).toEqual(true)
    expect(wrapper.hasClass('jedi')).toEqual(true)

    expectJediError({wrapper, exist: false})
    expectJediListEmpty({wrapper})
    expectJediListLoader({wrapper, exist: false})
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should call fetchJedi when componentWillMount', () => {
    const mockFetchJedi = jest.fn()
    const wrapper = shallow(<Jedi fetchJedi={mockFetchJedi}/>)

    expect(mockFetchJedi.mock.calls.length).toBe(1);
  })

  it('should render fetching error', () => {
    const errorMessage = "death star destroyed !"
    const wrapper = shallow(<Jedi/>)

    expect(wrapper.hasClass('error')).toEqual(false)
    expectJediError({ wrapper: wrapper.find('JediError'), exist: false})
    expect(wrapper.html()).toMatchSnapshot()

    wrapper.setProps({
      isFetchingError: true,
      fetchingError: errorMessage
    })

    expect(wrapper.hasClass('error')).toEqual(true)
    expectJediError({
      wrapper: wrapper.find('JediError'),
      isFetchingError: true,
      errorMessage
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render boundary error', () => {
    const errorMessage = "death star destroyed !"
    const wrapper = shallow(<Jedi/>)

    expect(wrapper.hasClass('error')).toEqual(false)
    expectJediError({ wrapper: wrapper.find('JediError'), exist: false})
    expect(wrapper.html()).toMatchSnapshot()

    wrapper.setState({
      isBoundaryError: true,
      boundaryError: errorMessage
    })

    expect(wrapper.hasClass('error')).toEqual(true)
    expectJediError({
      wrapper: wrapper.find('JediError'),
      isBoundaryError: true,
      errorMessage
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render children as a function', () => {
    const jedies = [
      {id: 42, name: 'Jar Jar Bings'},
      {id: 1337, name: 'Anakin Skywalkers'}
    ]
    const wrapper = shallow(
      <Jedi jedies={jedies}>
      { ({jedies}) => {
        return jedies.map(((jedi, index) => (
          <div key={index} className="jedi-list-item">
            {jedi.name}
          </div>
        )))
      }}
      </Jedi>
    )

    expect(wrapper.find('.jedi-list-item')).toHaveLength(2)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
