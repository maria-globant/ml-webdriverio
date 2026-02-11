//import { expect } from "expect-webdriverio"
// npx wdio run wdio.conf.js --mochaOpts.grep Login --> hace un grep para correr solo los tests que contengan "Login" en el titulo

import { expect, browser, $ } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import Shop from '../pageobjects/shop.js'


describe('Ecommerce Application', async () => {

    xit('Login Fail page title Smoke', async function () {


        const loginPage = new LoginPage()

        this.retries(2)  // reintenta 2 veces este test si falla

        await browser.url("/loginpagePractise/")
        console.log("Titulo: ", await browser.getTitle())

        await expect(browser).toHaveTitle(expect.stringContaining("Rahul Shetty Academy"))

    })


    it('Login Fail page', async () => {

        const loginPage = new LoginPage()


        await browser.url("/loginpagePractise/")
        console.log("Titulo: ", await browser.getTitle())

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
        await loginPage.signIn.click()

        //await $(".btn-primary").waitForExist(6000)

        //await $(".nav-link.btn.btn-primary").waitForDisplayed(6000)

   
        await shop.checkout.waitForDisplayed()

        /*const btn = await $(".nav-link.btn.btn-primary")

        console.log("exists:", await btn.isExisting())
        console.log("displayed:", await btn.isDisplayed())
        console.log("css display:", await btn.getCSSProperty("display"))
        console.log("css visibility:", await btn.getCSSProperty("visibility"))
        console.log("css opacity:", await btn.getCSSProperty("opacity"))*/

        /*  const modal = await $(".btn-primary")
          if (await modal.isDisplayed()) {
              await modal.$("button=Accept").click()
          }
  
  
          await expect(browser).toHaveUrl(expect.stringContaining('shop'))
          await expect(browser).toHaveTitle('ProtoCommerce')
  */
    })

})