const { Builder, By, Key } = require("selenium-webdriver");
require("chromedriver");

async function firstTest() {
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get("https://shahjalal.vercel.app/");
  //await driver.findElement(By.name('q')).sendKeys('shahjalal.vercel.app', Key.RETURN)
  let portfolio = await driver.findElement(By.id("contact"));
  portfolio.click();
  setInterval(function () {
    driver.quit();
  }, 10000);
}

firstTest();
