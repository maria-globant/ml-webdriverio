'use strict'
import { expect } from '@wdio/globals';
//import { expect as expectchai } from 'chai'
import { expect as expectchai } from 'chai';

//  npm install chai-dom --save-dev

//import { expect } from 'chai'


// comando para correr:: npx wdio run wdio.conf.js 

describe('Functional Testing on Application', async () => {

    it('Scrolling and Mouse hover', async () => {
        await browser.url("https://only-testing-blog.blogspot.com/2014/09/selectable.html")

        await $("button").doubleClick()

        //////////////////

        await browser.isAlertOpen()
        await browser.pause(5000)
        console.log("Abrio el alerta: ------------------------ 1")

        console.log("Abrio el alerta: ------------------------ 2")
        expectchai(await browser.isAlertOpen()).to.be.true
                console.log("Abrio el alerta: ------------------------ 3")
                
        expect(browser().getAlertText()).to.equal('You doble clicked. Thank you..')

        console.log("Abrio el alerta: ------------------------ 2", await browser.isAlertOpen())
        await browser.execute('window.alert("You doble clicked. Thank you")')
        console.log("Expect: ---------------------", await browser.isAlertOpen())


        console.log("Antes del get Alert --------------------------------", await browser.isAlertOpen())
        console.log(browser.isAlertOpen()); // outputs: false
        console.log("Alert ----------------------- ", await browser.execute('window.alert()'))
        browser.pause(3000)
        console.log("Antes del get Alert --------------------------------", await browser.isAlertOpen())
        console.log("EXPECT -----------------------", expect(await browser.isAlertOpen()).to.be.true)
        await expect(msg).to.equal('You doble clicked. Thank you')
        console.log("Expect ------------------", await expect(msg).to.equal('You doble clicked. Thank you..'))
    })
    it('Web Tables validation', async () => {
        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        // tr th:nth-child(1)
        //await $("tr th:nth-child(1)").click()

        const veggiesLocators = await $$("tr td:nth-child(1)")
        const OriginalveggiesName = await veggiesLocators.map(async veggie => await veggie.getText())

        const veggies = await OriginalveggiesName.slice()

        const sortedVeggies = await veggies.sort()

        expectchai(await OriginalveggiesName.sort()).to.eql(sortedVeggies)


    })
    it('Web Tables Filter validation', async () => {
        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        await $("#search-field").setValue("tomato")
        const veggiesLocators = await $$("tr td:nth-child(1)")

        await expect(await veggiesLocators).toBeElementsArrayOfSize({eq:1})

        await veggiesLocators[0].getText()

        //await exp

    })

}
)