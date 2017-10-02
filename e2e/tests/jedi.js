const { driver, By, until, expect } = require('../driver')
const page = require('../pages/jedi')(driver);

describe('jedi', () => {
  beforeEach (() => page.navigate())

  it('should display a list of jedi', done => {
    page.waitUntilApp()
    page.getAppTagName()
      .then(tagName => expect(tagName).to.equal('div'))

    page.waitUntilAppHeader()
    page.getAppHeaderTagName()
      .then(tagName => expect(tagName).to.equal('header'))

    page.waitUntilAppList()
    page.getAppListTagName()
      .then(tagName => expect(tagName).to.equal('ul'))

    page.waitUntilAppListItem()
    page.getAppListItemTagName()
      .then(tagName => expect(tagName).to.equal('li'))

    page.getAppListItems()
      .then(elements => expect(elements.length).to.equal(10))

      .then(() => done())
  })

  after(() => driver.quit())
})
