const { driver, By, until, expect } = require('../driver')
const page = require('../pages/jedi')(driver);

describe('jedi', () => {
  beforeEach (() => page.navigate())

  it('should display an empty list then a list of jedi', done => {
    page.waitUntilApp()
    page.getAppTagName()
      .then(tagName => expect(tagName).to.equal('div'))

    page.waitUntilAppHeader()
    page.getAppHeaderTagName()
      .then(tagName => expect(tagName).to.equal('header'))

    page.waitUntilJediListEmpty()
    page.getJediListEmptyTagName()
      .then(tagName => expect(tagName).to.equal('div'))
      
    page.waitUntilAppList()
    page.getAppListTagName()
      .then(tagName => expect(tagName).to.equal('ul'))

    page.waitUntilJediListItem()
    page.getJediListItemTagName()
      .then(tagName => expect(tagName).to.equal('li'))

    page.getJediListItems()
      .then(elements => expect(elements.length).to.equal(10))

      .then(() => done())
  })

  after(() => driver.quit())
})
