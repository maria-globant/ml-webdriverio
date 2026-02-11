//import { expect } from "expect-webdriverio"
// npx wdio run wdio.conf.js --mochaOpts.grep Login --> hace un grep para correr solo los tests que contengan "Login" en el titulo
import { expect as expectchai } from 'chai'
import { expect, browser, $ } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import Shop from '../pageobjects/shop.js'


describe('Ecommerce Application', async () => {

    it('Login Fail page title Smoke', async function () {


        const loginPage = new LoginPage()

        //this.retries(2)  // reintenta 2 veces este test si falla

        await browser.url("/loginpagePractise/")

        await expect(browser).toHaveTitle(expect.stringContaining("Rahul Shetty Academy"))

    })


    it('Login Fail page', async () => {

        const loginPage = new LoginPage()


        await browser.url("/loginpagePractise/")

        await expect(browser).toHaveTitle(expect.stringContaining("Rahul Shetty"))
        await loginPage.login("rahulshettyacademy", "Second")


        await browser.waitUntil(async () => await $("#signInBtn").getAttribute('value') === 'Sign In',
            {
                timeout: 3000,
                timeoutMsg: "Error message is not showing up"
            })

        await expect($("p")).toHaveText(expect.stringContaining("username is"))

    })

    it('Login Success page Laura', async () => {

        await browser.url("/loginpagePractise/")
        let loginPage = new LoginPage()
        const shop = new Shop()

        await loginPage.login("rahulshettyacademy", "Learning@830$3mK2")

        await shop.waitNewPage()    

        await shop.title.waitForDisplayed({ timeout: 5000 })

        expectchai(await shop.title.getText()).to.equal("ProtoCommerce")

    })

})