//import { expect } from "expect-webdriverio"
// npx wdio run wdio.conf.js --mochaOpts.grep Login --> hace un grep para correr solo los tests que contengan "Login" en el titulo

import { expect, browser, $ } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'


describe('Ecommerce Application', async () => {

    xit('Login Fail page title Smoke', async function () {


        const loginPage = new LoginPage ()

        this.retries(2)  // reintenta 2 veces este test si falla

        await browser.url("/loginpagePractise/")
        console.log("Titulo: ", await browser.getTitle())

        await expect(browser).toHaveTitle(expect.stringContaining("Rahul Shetty Academy"))

    })


    it('Login Fail page', async () => {

        const loginPage = new LoginPage ()

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

        await browser.url("loginpagePractise/")
        let  loginPage = new LoginPage ()
        await loginPage.login("rahulshettyacademy", "Learning@830$3mK2")
        await loginPage.signIn.click()
        
        await $(".btn-primary").waitForExist(2000)

        await expect(browser).toHaveUrl(expect.stringContaining('shop'))
        await expect(browser).toHaveTitle('ProtoCommerce')

    })

})