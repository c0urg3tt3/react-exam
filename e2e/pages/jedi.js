const { By, until } = require('../driver')

module.exports = function(driver) {
  const utils = require('../utils/driverUtils')(driver)

  const elements = {
    App: By.css('.app'),
    AppHeader: By.css('.app-header'),
    AppList: By.css('.app-list'),
    JediListEmpty: By.css('.jedi-list-empty'),
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

  // AppList
    waitUntilAppList: function() {
      return utils.waitForElementVisible(elements.AppList)
    },
    getAppListTagName: function() {
      return utils.getTagName(elements.AppList)
    },

  // JediListEmpty
    waitUntilJediListEmpty: function() {
      return utils.waitForElementVisible(elements.JediListEmpty)
    },
    getJediListEmptyTagName: function() {
      return utils.getTagName(elements.JediListEmpty)
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
