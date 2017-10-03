import React from 'react'

import { shallow } from 'enzyme'

import JediListLoader, { loaderQuoteProps } from './component'

describe('[component] JediListLoader', () => {
  it('should render component', () => {
    const wrapper = shallow(
      <JediListLoader>
      { ({message, quote, autor}) => {
        return (
          <div>
            <p className="message">{message}</p>
            <p className="quote">{quote}</p>
            <p className="autor">{autor}</p>
          </div>
        )
      }}
      </JediListLoader>
    )

    expect(wrapper.exists()).toEqual(true)
    expect(wrapper.is('div')).toEqual(true)
    expect(wrapper.hasClass('jedi-list-loader')).toEqual(true)

    expect(wrapper.find('p')).toHaveLength(3)

    expect(wrapper.find('.message').text()).toEqual(loaderQuoteProps.message)
    expect(wrapper.find('.quote').text()).toEqual(loaderQuoteProps.quote)
    expect(wrapper.find('.autor').first().text()).toEqual(loaderQuoteProps.autor)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
