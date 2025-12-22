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

       it ("End to End test", async() =>
        {
            
            const products = ['iphone X', 'Blackberry']
            await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
                    let  loginPage = new LoginPage ()

            await loginPage.login("rahulshettyacademy", "learning")

            /**
            await $("input[name='username']").setValue("rahulshettyacademy")
            const password = $("//input[@id='password']")
            await password.setValue("learning")
            await $("#signInBtn").click()
            ***/
           // const products = ['iphone X', 'Blackberry']
           await browser.url("https://rahulshettyacademy.com/angularpractice/shop")
            const link = await $("*=Checkout")
            await link.waitForExist()
            const cards = await $$("(//div[@class='card h-100'])")
    
            for (let i=0; i < await cards.length; i++)
            {
                const card = await cards[i].$("div h4 a")
                console.log (" -----------------  Producto --",i, await cards[i].getText())
    
                if ( products.includes(await card.getText()) )
                {
                        await cards[i].$(".card-footer button").click()
                        
                }
            }
            await link.click()
    
    
    
            await browser.pause(5000)
    
            const productPrices = await $$("//tr/td[4]/strong")
    
           const textPrice = await productPrices.map( async (text) => await (text.getText()))
           const prices = await textPrice.map( price => parseInt(price.split(".")[1].trim())).reduce( (accum, price) => accum+price, 0)
            console.log("product Prices Reduce ----------------",  prices)
    
           const totalValue = await $("h3 strong").getText()
           const totalIntValue = parseInt(totalValue.split(".")[1].trim())
    
            await expectchai(prices).to.equal(totalIntValue)
    
            await $(".btn-success").click()   
            await $("#country").setValue("ind")   
            await $(".lds-ellipsis").waitForExist({reverse:true})
    
            await $("=India").click()
    
            await $("input[type = 'submit']").click()
    
           // await expect( await $(".alert-success")).toHaveTextContaining("Success")
    
           await expect( await $(".alert-success")).toHaveText(expect.stringContaining("Success"))
           
        }

})