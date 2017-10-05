
export function expectAppLogo ({wrapper, exist = true, imageURL = "logo_jedi_order.svg", isAnimate = true}) {
  const Img = wrapper.find('AppLogo')
  expect(Img.exists()).toEqual(exist)

  if (exist) {
    expect(Img.prop('imageURL')).toEqual(imageURL)
    expect(Img.prop('isAnimate')).toEqual(isAnimate)
  }
  // const img = Img.find('.app-logo')
  // expect(img.exists()).toEqual(true)
  // expect(img.prop('src')).toEqual("logo_jedi_order.svg")
  // expect(img.hasClass('rotate')).toEqual(true)
}

export function expectAppTitle ({wrapper, exist = true, title = "Jedi List"}) {
  const H1 = wrapper.find('AppTitle')
  expect(H1.exists()).toEqual(exist)

  if (exist) {
    expect(H1.prop('title')).toEqual(title)
  }
  // const h1 = wrapper.find('.app-title')
  // expect(h1.exists()).toEqual(true)
  // expect(h1.text()).toEqual("Jedi List")
}

export function expectAppHeader ({wrapper, exist = true}) {
  const Header = wrapper.find('AppHeader')
  expect(Header.exists()).toEqual(exist)
}

export function expectJediForm ({wrapper, exist = true, isPosting = false}) {
  const JediForm = wrapper.find('JediForm')
  expect(JediForm.exists()).toEqual(exist)

  if (exist) {
    expect(JediForm.prop('isPosting')).toEqual(isPosting)
    expect(JediForm.prop('addJedi')).toHaveLength(1)
  }
}

export function expectJediFormField ({wrapper, exist = true, elementId = "", value = "", labelValue = "", placeholder = "", onChange = () => null}) {
  const JediFormField = wrapper.find('JediFormField')
  expect(JediFormField.exists()).toEqual(exist)

  if (exist) {
    expect(JediFormField.prop('elementId')).toEqual(elementId)
    expect(JediFormField.prop('value')).toEqual(value)
    expect(JediFormField.prop('labelValue')).toEqual(labelValue)
    expect(JediFormField.prop('placeholder')).toEqual(placeholder)
  }
}

export function expectJediFormButtonSubmit ({wrapper, exist = true, title = "", isDisabled = true}) {
  const JediFormButtonSubmit = wrapper.find('JediFormButtonSubmit')
  expect(JediFormButtonSubmit.exists()).toEqual(exist)

  if (exist) {
    expect(JediFormButtonSubmit.prop('title')).toEqual(title)
    expect(JediFormButtonSubmit.prop('isDisabled')).toEqual(isDisabled)
  }
}

export function expectJediList ({wrapper, exist = true, jedies = []}) {
  const JediList = wrapper.find('JediList')
  expect(JediList.exists()).toEqual(exist)
  if (exist) {
    expect(JediList.prop('jedies')).toEqual(jedies)
  }
  // const list = wrapper.find('.jedi-list')
  // expect(list.exists()).toEqual(true)
}

export function expectJediListTitle ({wrapper, exist = true}) {
  const JediListTitle = wrapper.find('JediListTitle')
  expect(JediListTitle.exists()).toEqual(exist)
  if (exist) {}
}

export function expectJediListItem ({wrapper, exist = true, length = 2, firstJedi = {id: 42, name: 'Jar Jar Bings'}}) {
  const JediListItem = wrapper.find('JediListItem')
  expect(JediListItem.exists()).toEqual(exist)

  if (exist) {
    expect(JediListItem).toHaveLength(length)
    expect(JediListItem.first().prop('jedi'))
      .toEqual(firstJedi)
  }
  // const listItems = wrapper.find('.jedi-list-item')
  // expect(listItems).toHaveLength(exist)
}

export function expectJediListLoader ({wrapper, exist = true}) {
  const JediListLoader = wrapper.find('JediListLoader')
  expect(JediListLoader.exists()).toEqual(exist)

  if (exist) {}
  // const listLoader = wrapper.find('.jedi-list-loader')
  // expect(listLoader.exists()).toBe(true)
}

export function expectJediListEmpty ({wrapper, exist = true}) {
  const JediListEmpty = wrapper.find('JediListEmpty')
  expect(JediListEmpty.exists()).toEqual(exist)

  if (exist) {}
  // const listEmpty = wrapper.find('.jedi-list-empty')
  // expect(listEmpty.exists()).toBe(true)
}

export function expectJediError ({wrapper, exist = true, isBoundaryError = false, isFetchingError = false, isPostingError = false, errorMessage = ""}) {
  const JediError = wrapper.find('JediError')
  expect(JediError.exists()).toEqual(exist)

  if (exist) {
    expect(wrapper.find('JediError').prop('isBoundaryError')).toEqual(isBoundaryError)
    expect(wrapper.find('JediError').prop('isFetchingError')).toEqual(isFetchingError)
    expect(wrapper.find('JediError').prop('isPostingError')).toEqual(isPostingError)
    expect(wrapper.find('JediError').prop('errorMessage')).toEqual(errorMessage)
  }
  // const error = wrapper.find('.jedi-error')
  // expect(error.exists()).toBe(true)
}

export function expectJediQuote ({wrapper, exist = true, message = "", quote = "", autor = ""}) {
  const JediQuote = wrapper.find('JediQuote')
  expect(JediQuote.exists()).toEqual(exist)

  if (exist) {
    // console.log(JediQuote.debug(), JediQuote.props())
    expect(JediQuote.prop('message')).toBe(message)
    expect(JediQuote.prop('quote')).toBe(quote)
    expect(JediQuote.prop('autor')).toBe(autor)
  }
  // const quote = wrapper.find('.jedi-quote')
  // expect(quote.exists()).toBe(true)
  // expect(quote.find('p').first().text()).toBe("oops!")
}
