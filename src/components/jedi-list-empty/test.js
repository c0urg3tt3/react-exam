import React from 'react'

import { shallow } from 'enzyme'

import JediListEmpty, { emptyQuoteProps } from './component'

describe('[component] JediListEmpty', () => {
  it('should render component', () => {
    const wrapper = shallow(
      <JediListEmpty>
      { ({message, quote, autor}) => {
        return (
          <div>
            <p className="message">{message}</p>
            <p className="quote">{quote}</p>
            <p className="autor">{autor}</p>
          </div>
        )
      }}
      </JediListEmpty>
    )

    expect(wrapper.exists()).toEqual(true)
    expect(wrapper.is('div')).toEqual(true)
    expect(wrapper.hasClass('jedi-list-empty')).toEqual(true)

    expect(wrapper.find('p')).toHaveLength(3)

    expect(wrapper.find('.message').text()).toEqual(emptyQuoteProps.message)
    expect(wrapper.find('.quote').text()).toEqual(emptyQuoteProps.quote)
    expect(wrapper.find('.autor').first().text()).toEqual(emptyQuoteProps.autor)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
