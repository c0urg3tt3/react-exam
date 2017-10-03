import React from 'react'
import { shallow } from 'enzyme'

import JediList from './component'

describe('[component] JediList', () => {
  it('should render component', () => {
    const wrapper = shallow(<JediList/>)

    expect(wrapper.exists()).toEqual(true)
    expect(wrapper.is('ul')).toEqual(true)
    expect(wrapper.hasClass('jedi-list')).toEqual(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render children as function', () => {
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

    expect(wrapper.find('li')).toHaveLength(0)
    expect(wrapper.html()).toMatchSnapshot()

    wrapper.setProps({ jedies })

    expect(wrapper.find('li')).toHaveLength(2)
    expect(wrapper.find('li').first().text()).toEqual(jedies[0].name)
    expect(wrapper.find('li').last().text()).toEqual(jedies[1].name)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
