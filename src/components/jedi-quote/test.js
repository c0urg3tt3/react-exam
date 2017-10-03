import React from 'react'

import { shallow } from 'enzyme'

import JediQuote from './component'

describe('[component] JediQuote', () => {
  it('should render component', () => {
    const props = {
      message: "Something went wrong while fetching !",
      quote: "What if I told you that the Republic was now under the control of a Dark Lord of the Sith?",
      autor: "Count Dooku"
    }

    const wrapper = shallow(<JediQuote/>)

    expect(wrapper.exists()).toEqual(true)
    expect(wrapper.is('div')).toEqual(true)
    expect(wrapper.hasClass('jedi-quote')).toEqual(true)
    expect(wrapper.find('p')).toHaveLength(2)
    expect(wrapper.find('blockquote')).toHaveLength(1)
    expect(wrapper.find('footer')).toHaveLength(1)
    expect(wrapper.find('p').first().text()).toEqual("")
    expect(wrapper.find('blockquote p').first().text()).toEqual("")
    expect(wrapper.find('footer').first().text()).toEqual("")
    expect(wrapper.html()).toMatchSnapshot()

    wrapper.setProps(props)

    expect(wrapper.find('p').first().text()).toEqual(props.message)
    expect(wrapper.find('blockquote p').first().text()).toEqual(props.quote)
    expect(wrapper.find('footer').first().text()).toEqual(props.autor)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
