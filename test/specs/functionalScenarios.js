'use strict'

import { expect } from 'chai'

describe('Functional Testing on Application', async () => {

    it('Scrolling and Mouse hover', async () => {
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

        //await $("button[ondblclick='myFunction()']").doubleClick()
        await $("button").doubleClick()
        await browser.pause(5000)


        //await browser.isAlertOpen()
        //await browser.pause(5000)
        //expect(await browser.isAlertOpen()).to.be.true
        //expect(browser().getAlertText()).to.equal('You doble clicked. Thank you..')

        //console.log("Abrio el alerta: ------------------------", await browser.isAlertOpen())
        //await browser.execute('window.alert("You doble clicked. Thank you")')
        //console.log("Expect: ---------------------", await browser.isAlertOpen())
        //console.log("Get Alert Text ------------------", await browser.getAlertText())

        //console.log("Antes del get Alert --------------------------------", await browser.isAlertOpen())
        //console.log(browser.isAlertOpen()); // outputs: false
        //console.log("Alert ----------------------- ", await browser.execute('window.alert()'))
        //browser.pause(3000)
        // console.log("Antes del get Alert --------------------------------", await browser.isAlertOpen())
        //console.log("EXPECT -----------------------", expect(await browser.isAlertOpen()).to.be.true)
        //await expect(msg).to.equal('You doble clicked. Thank you')
        //console.log("Expect ------------------", await expect(msg).to.equal('You doble clicked. Thank you..'))
    })
}
)