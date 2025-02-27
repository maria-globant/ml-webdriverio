//import { expect, browser, $ } from '@wdio/globals'
import { expect, browser, $ } from '@wdio/globals'

describe('UI Controls Test Suit', async () => {

    it('UI Controls', async () => {

        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        console.log("Titulo: ", await browser.getTitle())

        //await browser.pause(3000)
        await expect(browser).toHaveTitle(expect.stringContaining("Rahul Shetty"))
        await $("input[name='username']").setValue("rahulshettyacademy")
        const password = $("//input[@id='password']")
        await password.setValue("learning")

        const radioButtons = await $$(".customradio")
        //console.log("RadioButtons: ", radioButtons[0],radioButtons[1] ]
        const userDropdowns = radioButtons[1]
        await userDropdowns.$("span").click()

        const modal = await $(".modal-body")
        await modal.waitForDisplayed()
        await $("#cancelBtn").click()

        // seleccionar la opcion "Admin"
        await $$(".customradio")[0].$("span").isSelected()

        await userDropdowns.$("span").click()
        await modal.waitForDisplayed()
        await $("#okayBtn").click()

        await $$(".customradio")[0].$("span").click()
        await expect(modal).not.toBeDisplayed()

        const dropdowns = await $("select.form-control")
        await dropdowns.selectByAttribute('value', 'teach')
        await dropdowns.selectByVisibleText("Consultant")
        await dropdowns.selectByIndex(0)

        console.log(await dropdowns.getValue())

        await browser.pause(2000)

    })
})
