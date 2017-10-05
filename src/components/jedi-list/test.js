import React from 'react'
import { shallow } from 'enzyme'

import JediList from './component'

import { expectJediListTitle } from '../../utils/expectedComponents'

describe('[component] JediList', () => {
  it('should render component', () => {
    const wrapper = shallow(<JediList/>)

    expect(wrapper.exists()).toEqual(true)
    expect(wrapper.is('ul')).toEqual(true)
    expect(wrapper.hasClass('jedi-list')).toEqual(true)

    expectJediListTitle({wrapper})

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render component with children as function', () => {
    const jedies = [
      { id: 1337, name: 'Anakin Skywalker' },
      { id: 4242, name: 'Sheev Palpatine' }
    ]

    const wrapper = shallow(
      <JediList isFetching={true}>
      {
        ({jedies}) => jedies.map((jedi, index) => {
          return (<li key={index} className="jedi">{jedi.name}</li>)
        })
      }
      </JediList>
    )

    expectJediListTitle({wrapper})

    expect(wrapper.find('li')).toHaveLength(0)
    expect(wrapper.html()).toMatchSnapshot()

    wrapper.setProps({ jedies })

    const items = wrapper.find('li')
    expect(items).toHaveLength(2)
    expect(items.first().text()).toEqual(jedies[0].name)
    expect(items.last().text()).toEqual(jedies[1].name)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
