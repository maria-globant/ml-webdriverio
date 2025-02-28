
import { expect, browser, $ } from '@wdio/globals'

//import { expect } from 'chai'

describe('UI Controls Test Suit', async () => {

    xit('UI Controls', async () => {

        // Login
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await expect(browser).toHaveTitle(expect.stringContaining("Rahul Shetty"))
        await $("input[name='username']").setValue("rahulshettyacademy")
        const password = $("//input[@id='password']")
        await password.setValue("learning")

        // seleccion de radio button del usuario

        const radioButtons = await $$(".customradio")
        const userDropdowns = radioButtons[1]
        await userDropdowns.$("span").click()

        // Selecciona Cancel
        const modal = await $(".modal-body")
        await modal.waitForDisplayed()
        await $("#cancelBtn").click()

        // seleccionar la opcion "Admin"
        await $$(".customradio")[0].$("span").isSelected()

        // selecciona opcion ok pop up
        await userDropdowns.$("span").click()
        await modal.waitForDisplayed()
        await $("#okayBtn").click()

        await $$(".customradio")[0].$("span").click()

        await expect(modal).not.toBeDisplayed()

        const dropdowns = await $("select.form-control")
        await dropdowns.selectByAttribute('value', 'teach')
        await dropdowns.selectByVisibleText("Consultant")
        await dropdowns.selectByIndex(0)

        const valor = await dropdowns.getValue()
        valor.localeCompare("stud")
        valor.localeCompare("stuud")
    })

    it('Dynamic Dropdown Controls', async () => {
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await $("#autocomplete").addValue("ind")
        await browser.pause(3000)

        let items = await $$("[class='ui-menu-item'] div")

        for (var i = 0; i < await items.length; i++) {

            if (await items[i].getText() === "India") {
                await items[i].click()
            }
        }
        await browser.pause(3000)
    })
}
)