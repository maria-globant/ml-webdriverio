//import { expect } from "expect-webdriverio"
import { expect, browser, $ } from '@wdio/globals'


describe('Ecommerce Application', async () => {

    it('Login Fail page', async () => {

        //webdriverio Async

        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")

        console.log("Titulo: ", await browser.getTitle())
        await expect(browser).toHaveTitle(expect.stringContaining("Rahul Shetty"))

        // Css selector - Xpath 

        //await $("inputname[name='username']").setValue("rahulshettyacademy")

        $("inputname[name='username']").setValue("rahulshettyacademy")

        await browser.pause(3000)
    })



}
)