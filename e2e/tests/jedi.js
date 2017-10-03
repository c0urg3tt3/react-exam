const { driver, By, until, expect } = require('../driver')
const page = require('../pages/jedi')(driver);

describe('jedi', () => {
  const dbUtils = require('../utils/dbUtils')('./api/db-test.json')

  before (() => dbUtils.saveDb())

  beforeEach (() => page.navigate())

  it('should display a list loader quote then a list of jedi', done => {
    page.waitUntilApp()
    page.getAppTagName()
      .then(tagName => expect(tagName).to.equal('div'))

    page.waitUntilAppHeader()
    page.getAppHeaderTagName()
      .then(tagName => expect(tagName).to.equal('header'))

    page.waitUntilJediListLoader()
    page.getJediListLoaderTagName()
      .then(tagName => expect(tagName).to.equal('div'))

    page.waitUntilJediList()
    page.getJediListTagName()
      .then(tagName => expect(tagName).to.equal('ul'))

    page.waitUntilJediListItem()
    page.getJediListItemTagName()
      .then(tagName => expect(tagName).to.equal('li'))

    page.getJediListItems()
      .then(elements => expect(elements.length).to.equal(10))
      .then(() => done())
  })

  it('should display a list empty quote', done => {
    dbUtils.clearDb()
    page.navigate()

    page.waitUntilApp()
    page.getAppTagName()
      .then(tagName => expect(tagName).to.equal('div'))

    page.waitUntilAppHeader()
    page.getAppHeaderTagName()
      .then(tagName => expect(tagName).to.equal('header'))

    page.waitUntilJediListEmpty()
    page.getJediListEmptyTagName()
      .then(tagName => expect(tagName).to.equal('div'))
      .then(() => done())
  })

  it.skip('should display an error when fetch jedi fail', done => {
    page.waitUntilApp()
    page.getAppTagName()
      .then(tagName => expect(tagName).to.equal('div'))

    page.waitUntilAppHeader()
    page.getAppHeaderTagName()
      .then(tagName => expect(tagName).to.equal('header'))

    page.waitUntilJediError()
    page.getJediErrorTagName()
      .then(tagName => expect(tagName).to.equal('div'))
      .then(() => done())
  })

  afterEach(() => dbUtils.restoreDb())

  after(() => driver.quit())
})
