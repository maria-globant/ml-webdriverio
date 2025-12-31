//import { expect } from "expect-webdriverio"

import { expect, browser, $ } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
//import ShopPage from '../pageobjects/shop.js'
import Shop from '../pageobjects/shop.js'
import { expect as expectchai } from 'chai'

const { Builder } = require('selenium-webdriver');


describe('Ecommerce Application', async () => {

    xit('Login Fail page', async () => {

        await browser.url('https://rahulshettyacademy.com/angularpractice/shop');
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

        let  loginPage = new LoginPage ()

        await loginPage.login("rahulshettyacademy", "learning")

        await console.log ("Alert ------------", await loginPage.alert.getText())


    })

   it ("End to End test", async() => {
            
            const products = ['iphone X', 'Blackberry']
            let  shopPage = new Shop()
            let  loginPage = new LoginPage ()


             await browser.url("https://rahulshettyacademy.com/angularpractice/shop")

            console.log("Titulo: ---------------------", await browser.getTitle())
        
            await expect(browser).toHaveTitle(expect.stringContaining("ProtoCommerce"))
        

            //const checkoutBtn = $('a.nav-link.btn.btn-primary');


            console.log("Wait For Exist: 2---------------------")

            //console.log(" Informacion de la pagina --------------", await driver.getPageSource());

           // await checkoutBtn.waitForExist({ timeout: 10000 });

            console.log("Wait For Exist: 3---------------------")
            //await checkoutBtn.waitForDisplayed({ timeout: 10000 });

            shopPage.checkout.waitForExist
            

            console.log("Wait For Exist: 4 ---------------------")

            await shopPage.addProductsToCart(products)

            await shopPage.checkout.click()

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

       //browser.close()
       //await browser.closeWindow()
       //await browser.deleteSession();
          
    })

})