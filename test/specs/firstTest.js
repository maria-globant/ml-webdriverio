//import { expect } from "expect-webdriverio"
// npx wdio run wdio.conf.js --mochaOpts.grep Login

import { expect, browser, $ } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'


describe('Ecommerce Application', async () => {

    it('Login Fail page Prueba', async () => {

        const loginPage = new LoginPage ()

        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        console.log("Titulo: ", await browser.getTitle())

        await expect(browser).toHaveTitle(expect.stringContaining("Rahul Shetty"))

        //await browser.pause(2000)
        //await $("input[name='username']").setValue("Second")
        //const password = $("//input[@id='password']")
        //await password.setValue("learning")
        //await $("#signInBtn").click()
        //await browser.pause(2000)

        await loginPage.login("rahulshettyacademy", "Second")


        await browser.waitUntil(async () => await $("#signInBtn").getAttribute('value') === 'Sign In',
            {
                timeout: 3000,
                timeoutMsg: "Error message is not showing up"
            })

        await expect($("p")).toHaveText(expect.stringContaining("username is"))

    })

    it('Login Success page Prueba', async () => {

        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
     //   await $("input[name='username']").setValue("rahulshettyacademy")
     //   const password = $("//input[@id='password']")
     //   await password.setValue("learning")

        let  loginPage = new LoginPage ()

        await loginPage.login("rahulshettyacademy", "Learning@830$3mK2")

    
        await $("#signInBtn").click()

        await $(".btn-primary").waitForExist(2000)

        await expect(browser).toHaveUrl(expect.stringContaining('shop'))
        await expect(browser).toHaveTitle('ProtoCommerce')

    })

})