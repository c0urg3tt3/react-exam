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

    page.waitUntilJediForm()
    page.getJediFormTagName()
      .then(tagName => expect(tagName).to.equal('form'))

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

    page.waitUntilJediForm()
    page.getJediFormTagName()
      .then(tagName => expect(tagName).to.equal('form'))

    page.waitUntilJediListEmpty()
    page.getJediListEmptyTagName()
      .then(tagName => expect(tagName).to.equal('div'))
      .then(() => done())
  })

  it('should add a jedi', done => {
    page.waitUntilApp()
    page.getAppTagName()
      .then(tagName => expect(tagName).to.equal('div'))

    page.waitUntilAppHeader()
    page.getAppHeaderTagName()
      .then(tagName => expect(tagName).to.equal('header'))

    page.waitUntilJediForm()
    page.getJediFormTagName()
      .then(tagName => expect(tagName).to.equal('form'))

    page.waitUntilJediFormButtonSubmit()
    page.getJediFormButtonSubmitTagName()
      .then(tagName => expect(tagName).to.equal('button'))

    page.waitUntilJediFormFieldName()
    page.getJediFormFieldNameTagName()
      .then(tagName => expect(tagName).to.equal('input'))

    page.submitJediFormWithName('Jar Jar Bings')

    driver.sleep(1000)

    page.waitUntilJediList()
    page.getJediListTagName()
      .then(tagName => expect(tagName).to.equal('ul'))

    page.waitUntilJediListItem()
    page.getJediListItemTagName()
      .then(tagName => expect(tagName).to.equal('li'))

    page.getJediListItems()
      .then(elements => expect(elements.length).to.equal(11))
      .then(() => done())
  })

  it.skip('should display an error when fetch jedi fail', done => {
    page.waitUntilApp()
    page.getAppTagName()
      .then(tagName => expect(tagName).to.equal('div'))

    page.waitUntilAppHeader()
    page.getAppHeaderTagName()
      .then(tagName => expect(tagName).to.equal('header'))

    page.waitUntilJediForm()
    page.getJediFormTagName()
      .then(tagName => expect(tagName).to.equal('form'))

    page.waitUntilJediError()
    page.getJediErrorTagName()
      .then(tagName => expect(tagName).to.equal('div'))
      .then(() => done())
  })

  afterEach(() => dbUtils.restoreDb())

  after(() => driver.quit())
})
