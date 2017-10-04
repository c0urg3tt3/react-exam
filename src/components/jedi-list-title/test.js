import React from 'react'
import { shallow } from 'enzyme'

import JediListTitle from './component'

describe('[component] JediListTitle', () => {
  it('should render component', () => {
    const wrapper = shallow(<JediListTitle/>)

    expect(wrapper.exists()).toEqual(true)
    expect(wrapper.is('li')).toEqual(true)
    expect(wrapper.hasClass('jedi-list-title')).toEqual(true)
    expect(wrapper.children()).toHaveLength(2)

    const id = wrapper.find('.jedi-list-title_id')
    expect(id.is('span')).toBe(true)
    expect(id.text()).toBe("id")

    const name = wrapper.find('.jedi-list-title_name')
    expect(name.is('span')).toBe(true)
    expect(name.text()).toBe("name")

    expect(wrapper.html()).toMatchSnapshot()
  })
})
