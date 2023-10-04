const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function example() {
    const options = new chrome.Options();
    options.addArguments('headless');

    const driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {
        await driver.get('file://' + __dirname + '/index.html');

        const button = await driver.findElement(By.css(tagName)('button'));
        await button.click();

        // Wait for an alert to appear and accept it
        const alert = await driver.switchTo().alert();
        await alert.accept();

        // Add more tests as needed

    } finally {
        await driver.quit();
    }
})();
