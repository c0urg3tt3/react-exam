const webDriver = require('selenium-webdriver')
const chai = require('chai')
const mocha = require('mocha')

const driver = new webDriver.Builder()
  .forBrowser('firefox')
  .build()

module.exports = {
  driver,
  By: webDriver.By,
  until: webDriver.until,
  expect: chai.expect
}
