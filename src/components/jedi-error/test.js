import React from 'react'
import { shallow } from 'enzyme'

import JediError, {
  BOUNDARY_ERROR_QUOTE,
  FETCHING_ERROR_QUOTE,
  POSTING_ERROR_QUOTE
} from './component'

const Quote = ({message, quote, autor}) => {
  return (
    <div>
      <p className="message">{message}</p>
      <blockquote>
        <p className="quote">{quote}</p>
        <footer className="autor">{autor}</footer>
      </blockquote>
    </div>
  )
}

describe('[component] JediError', () => {
  it('should render empty component', () => {
    const wrapper = shallow(
      <JediError>
        {(quoteProps) => (<Quote {...quoteProps}/>)}
      </JediError>
    )

    expect(wrapper.exists()).toEqual(true)
    expect(wrapper.is('div')).toEqual(false)
    expect(wrapper.hasClass('jedi-error')).toEqual(false)

    const errorMessage = "No, I am your father!"
    wrapper.setProps({
      errorMessage: errorMessage
    })

    expect(wrapper.exists()).toEqual(true)
    expect(wrapper.is('div')).toEqual(false)
    expect(wrapper.hasClass('jedi-error')).toEqual(false)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render component when boundary error', () => {
    const errorMessage = "No, I am your father!"
    const wrapper = shallow(
      <JediError errorMessage={errorMessage} isBoundaryError={true}>
        {(quoteProps) => (<Quote {...quoteProps}/>)}
      </JediError>
    )

    const q = wrapper.find('Quote').dive()
    expect(q.find('.message').text()).toEqual(errorMessage)
    expect(q.find('.quote').text()).toEqual(BOUNDARY_ERROR_QUOTE.quote)
    expect(q.find('.autor').text()).toEqual(BOUNDARY_ERROR_QUOTE.autor)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render component when fetch error', () => {
    const errorMessage = "No, I am your father!"
    const wrapper = shallow(
      <JediError errorMessage={errorMessage} isFetchingError={true}>
        {(quoteProps) => (<Quote {...quoteProps}/>)}
      </JediError>
    )

    const q = wrapper.find('Quote').dive()
    expect(q.find('.message').text()).toEqual(errorMessage)
    expect(q.find('.quote').text()).toEqual(FETCHING_ERROR_QUOTE.quote)
    expect(q.find('.autor').text()).toEqual(FETCHING_ERROR_QUOTE.autor)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render component when post error', () => {
    const errorMessage = "No, I am your father!"
    const wrapper = shallow(
      <JediError errorMessage={errorMessage} isPostingError={true}>
        {(quoteProps) => (<Quote {...quoteProps}/>)}
      </JediError>
    )

    const q = wrapper.find('Quote').dive()
    expect(q.find('.message').text()).toEqual(errorMessage)
    expect(q.find('.quote').text()).toEqual(POSTING_ERROR_QUOTE.quote)
    expect(q.find('.autor').text()).toEqual(POSTING_ERROR_QUOTE.autor)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
