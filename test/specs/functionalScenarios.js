'use strict'
import { expect } from '@wdio/globals';

//  npm install chai-dom --save-dev

//import { expect } from 'chai'

import { expect as expectchai } from 'chai'

// comando:: npx wdio run wdio.conf.js

describe('Functional Testing on Application', async () => {

    xit('Scrolling and Mouse hover', async () => {
        /**
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
 
        await $("#mousehover").scrollIntoView()
 
        await browser.pause(3000)
        await $("#mousehover").moveTo()
        await browser.pause(3000)
 
        await $("a[href = '#top']").click()
 
        await browser.pause(3000)
*/
        await browser.url("https://only-testing-blog.blogspot.com/2014/09/selectable.html")

        await $("button").doubleClick()
        //await $("button").doubleClick()
        //await browser.pause(5000)


        //await browser.isAlertOpen()
        //await browser.pause(5000)
        //expect(await browser.isAlertOpen()).to.be.true
        //expect(browser().getAlertText()).to.equal('You doble clicked. Thank you..')

        //console.log("Abrio el alerta: ------------------------", await browser.isAlertOpen())
        //await browser.execute('window.alert("You doble clicked. Thank you")')
        //console.log("Expect: ---------------------", await browser.isAlertOpen())
        console.log("Get Alert Text ------------------", await browser.getAlertText())

        //console.log("Antes del get Alert --------------------------------", await browser.isAlertOpen())
        //console.log(browser.isAlertOpen()); // outputs: false
        //console.log("Alert ----------------------- ", await browser.execute('window.alert()'))
        //browser.pause(3000)
        // console.log("Antes del get Alert --------------------------------", await browser.isAlertOpen())
        //console.log("EXPECT -----------------------", expect(await browser.isAlertOpen()).to.be.true)
        //await expect(msg).to.equal('You doble clicked. Thank you')
        //console.log("Expect ------------------", await expect(msg).to.equal('You doble clicked. Thank you..'))
    })
    xit('Web Tables validation', async () => {
        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        // tr th:nth-child(1)
        //await $("tr th:nth-child(1)").click()

        const veggiesLocators = await $$("tr td:nth-child(1)")
        const OriginalveggiesName = await veggiesLocators.map(async veggie => await veggie.getText())

        console.log("OriginalveggiesName ------ 1", OriginalveggiesName)

        const veggies = await OriginalveggiesName.slice()
        const sortedVeggies = await veggies.sort()

        console.log("veggie ordenadas", sortedVeggies)

        expectChai(OriginalveggiesName).to.eql(sortedVeggies)

/*        if (expect(veggiesName).to.equal(sortedVeggies))
            console.log("--------------------- Ordenadas")
        else
            console.log("--------------------- No estan ordenadas") */
    })
    it('Web Tables Filter validation', async () => {
        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        await $("#search-field").setValue("tomato")
        const veggiesLocators = await $$("tr td:nth-child(1)")

        await expect(await veggiesLocators).toBeElementsArrayOfSize({eq:1})
        console.log( "ToBeElements ArrayOfSize", await expect(await veggiesLocators).toBeElementsArrayOfSize({eq:1}))

        console.log("Tomato ------------ ", await veggiesLocators[0].getText())
        await veggiesLocators[0].getText()

        //await exp

    })

}
)