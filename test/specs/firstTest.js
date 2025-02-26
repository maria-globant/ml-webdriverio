import { expect } from "expect-webdriverio"

describe('Ecommerce Application', async () => {

    it('Login Fail page', async () => {

        //webdriverio Async

        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")

        console.log("Titulo: ", await browser.getTitle())
        await expect(browser).toHaveTitle(expect.stringContaining("Rahul Shetty"))
    })

    // Css selector - Xpath 

    var person1 = await $("inputname[name='username']")
    //await $("inputname[name='username']").setValue("rahulshettyacademy")
    person1.setValue("rahulshettyacademy")

    var person2 = $("#username")
    //await $("#username").setValue("secondCSS")
    person2.setValue("secondCSS")

}
)