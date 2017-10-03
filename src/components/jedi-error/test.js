import React from 'react'
import { shallow } from 'enzyme'

import JediError, {
  BOUNDARY_ERROR_QUOTE,
  FETCHING_ERROR_QUOTE
} from './component'

describe('[component] JediError', () => {
  it('should render component', () => {
    const wrapper = shallow(
      <JediError>
      {
        ({message, quote, autor}) => (
          <div>
            <p className="message">{message}</p>
            <blockquote>
              <p className="quote">{quote}</p>
              <footer className="autor">{autor}</footer>
            </blockquote>
          </div>
        )
      }
      </JediError>
    )

    expect(wrapper.exists()).toEqual(true)
    expect(wrapper.is('div')).toEqual(false)
    expect(wrapper.hasClass('.jedi-error')).toEqual(false)

    const errorMessage = "No, I am your father!"
    wrapper.setProps({
      errorMessage: errorMessage,
      isBoundaryError: true
    })

    expect(wrapper.find('.message').text()).toEqual(errorMessage)
    expect(wrapper.find('.quote').text()).toEqual(BOUNDARY_ERROR_QUOTE.quote)
    expect(wrapper.find('.autor').text()).toEqual(BOUNDARY_ERROR_QUOTE.autor)

    expect(wrapper.html()).toMatchSnapshot()

    wrapper.setProps({
      isBoundaryError: false,
      isFetchingError: true
    })

    expect(wrapper.find('.message').text()).toEqual(errorMessage)
    expect(wrapper.find('.quote').text()).toEqual(FETCHING_ERROR_QUOTE.quote)
    expect(wrapper.find('.autor').text()).toEqual(FETCHING_ERROR_QUOTE.autor)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
