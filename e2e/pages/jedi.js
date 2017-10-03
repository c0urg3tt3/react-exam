const { By, until } = require('../driver')

module.exports = function(driver) {
  const utils = require('../utils/driverUtils')(driver)

  const elements = {
    App: By.css('.app'),
    AppHeader: By.css('.app-header'),
    Jedi: By.css('.jedi'),
    JediError: By.css('.jedi-error'),
    JediForm: By.css('.jedi-form'),
    JediList: By.css('.jedi-list'),
    JediListEmpty: By.css('.jedi-list-empty'),
    JediListLoader: By.css('.jedi-list-loader'),
    JediListItem: By.css('.jedi-list-item'),
  }

  return {
    url:  'http://localhost:3000/',
    elements: elements,

    navigate: function() {
      return driver.navigate().to(this.url)
    },

  // App
    waitUntilApp: function() {
      return utils.waitForElementVisible(elements.App)
    },
    getAppTagName: function() {
      return utils.getTagName(elements.App)
    },

  // AppHeader
    waitUntilAppHeader: function() {
      return utils.waitForElementVisible(elements.AppHeader)
    },
    getAppHeaderTagName: function() {
      return utils.getTagName(elements.AppHeader)
    },

  // JediError
    waitUntilJediError: function() {
      return utils.waitForElementVisible(elements.JediError)
    },
    getJediErrorTagName: function() {
      return utils.getTagName(elements.JediError)
    },

  // JediError
    waitUntilJediForm: function() {
      return utils.waitForElementVisible(elements.JediForm)
    },
    getJediFormTagName: function() {
      return utils.getTagName(elements.JediForm)
    },

  // JediList
    waitUntilJediList: function() {
      return utils.waitForElementVisible(elements.JediList)
    },
    getJediListTagName: function() {
      return utils.getTagName(elements.JediList)
    },

  // JediListEmpty
    waitUntilJediListEmpty: function() {
      return utils.waitForElementVisible(elements.JediListEmpty)
    },
    getJediListEmptyTagName: function() {
      return utils.getTagName(elements.JediListEmpty)
    },

  // JediListLoader
    waitUntilJediListLoader: function() {
      return utils.waitForElementVisible(elements.JediListLoader)
    },
    getJediListLoaderTagName: function() {
      return utils.getTagName(elements.JediListLoader)
    },

  // JediListItem
    waitUntilJediListItem: function() {
      return utils.waitForElementVisible(elements.JediListItem)
    },
    getJediListItems: function() {
      return driver.findElements(elements.JediListItem)
    },
    getJediListItemTagName: function() {
      return utils.getTagName(elements.JediListItem)
    },
  }
}
