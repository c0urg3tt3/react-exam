const { By, until } = require('../driver')

module.exports = function(driver) {
  const utils = require('../utils/driverUtils')(driver)

  const elements = {
    App: By.css('.app'),
    AppHeader: By.css('.app-header'),
    AppList: By.css('.app-list'),
    AppListItem: By.css('.jedi-list-item'),
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

  // AppListItem
    waitUntilAppListItem: function() {
      return utils.waitForElementVisible(elements.AppListItem)
    },
    getAppListItems: function() {
      return driver.findElements(elements.AppListItem)
    },
    getAppListItemTagName: function() {
      return utils.getTagName(elements.AppListItem)
    },
  }
}
