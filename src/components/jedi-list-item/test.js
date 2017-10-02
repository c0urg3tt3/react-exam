import React from 'react'

import { shallow } from 'enzyme'

import JediListItem from './component'

describe('[component] JediListItem', () => {
  it('should render component', () => {
    const props = {
      jedi: { id: 1337, name: 'Anakin Skywalker' }
    }

    const wrapper = shallow(<JediListItem/>)

    expect(wrapper.exists()).toEqual(true)
    expect(wrapper.is('li')).toEqual(true)
    expect(wrapper.hasClass('jedi-list-item')).toEqual(true)

    let span = wrapper.find('span')
    expect(span).toHaveLength(2)
    expect(span.first().text()).toBe("")
    expect(span.last().text()).toBe("")
    expect(wrapper.html()).toMatchSnapshot()

    wrapper.setProps(props)

    span = wrapper.find('span')
    expect(span).toHaveLength(2)
    expect(span.first().text()).toBe(props.jedi.id +"")
    expect(span.last().text()).toBe(props.jedi.name)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
