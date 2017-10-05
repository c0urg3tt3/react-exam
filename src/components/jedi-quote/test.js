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
    const message = wrapper.find('.jedi-quote_message')
    const blockquote = wrapper.find('blockquote')
    const quote = wrapper.find('blockquote .jedi-quote_quote')
    const autor = wrapper.find('blockquote .jedi-quote_autor')

    expect(wrapper.exists()).toEqual(true)
    expect(wrapper.is('div')).toEqual(true)
    expect(wrapper.hasClass('jedi-quote')).toEqual(true)

    expect(message.exists()).toEqual(true)
    expect(message.is('p')).toEqual(true)
    expect(message.text()).toEqual("")

    expect(blockquote.exists()).toEqual(true)
    expect(blockquote.children()).toHaveLength(2)

    expect(quote.exists()).toEqual(true)
    expect(quote.is('p')).toEqual(true)
    expect(quote.text()).toEqual("")

    expect(autor.exists()).toEqual(true)
    expect(autor.is('footer')).toEqual(true)
    expect(autor.text()).toEqual("")

    expect(wrapper.html()).toMatchSnapshot()

    wrapper.setProps(props)

    expect(wrapper.find('.jedi-quote_message').text()).toEqual(props.message)
    expect(wrapper.find('blockquote .jedi-quote_quote').text()).toEqual(props.quote)
    expect(wrapper.find('blockquote .jedi-quote_autor').text()).toEqual(props.autor)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
