//import { expect } from "expect-webdriverio"

import { expect, browser, $ } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'


describe('Ecommerce Application', async () => {

    it('Login Fail page', async () => {

        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        console.log("Titulo: ", await browser.getTitle())
        
        await expect(browser).toHaveTitle(expect.stringContaining("Rahul Shetty"))

        let  loginPage = new LoginPage ()
        await loginPage.Login("rahulshettyacademy", "Second")

        await console.log("Alert ------------------", await loginPage.alert.getText())

        await browser.waitUntil(async () => await loginPage.signIn.getAttribute('value') === 'Sign In',
            {
                timeout: 3000,
                timeoutMsg: "Error message is not showing up"
            })
        await console.log(await $(".alert-danger").getText())
        
        await console.log("Alert ------------------", await loginPage.alert.getText())

        await expect(await loginPage.textInfo).toHaveText(expect.stringContaining("username is"))

    })

    xit('Login Success page', async () => {

        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
     //   await $("input[name='username']").setValue("rahulshettyacademy")
     //   const password = $("//input[@id='password']")
     //   await password.setValue("learning")

        let  loginPage = new LoginPage ()

        await loginPage.login("rahulshettyacademy", "learning")

        await console.log ("Alert ------------", await loginPage.alert.getText())

        /**** 
        await $("#signInBtn").click()

        await $(".btn-primary").waitForExist(2000)

        await expect(browser).toHaveUrl(expect.stringContaining('shop'))
        await expect(browser).toHaveTitle('ProtoCommerce')
        ***/
    })

})