//import { expect } from "expect-webdriverio"

import { expect, browser, $ } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
//import ShopPage from '../pageobjects/shop.js'
import Shop from '../pageobjects/shop.js'
import ReviewPage from '../pageobjects/review.page.js'
import PurchasePage from '../pageobjects/purchase.js'

import { expect as expectchai } from 'chai'

const fs = require('fs');
let credentials = JSON.parse(fs.readFileSync('test/testData/loginTest.json'))

const { Builder } = require('selenium-webdriver');


describe('Ecommerce Application', async () => {

    credentials.forEach( ({username, password})  => {
        it('Login Fail page', async () => {

            await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
            console.log("Titulo: ", await browser.getTitle())
            await expect(browser).toHaveTitle(expect.stringContaining("Rahul Shetty"))

            let  loginPage = new LoginPage ()
            await loginPage.Login(username, password)

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
    })

    xit('Login Success page', async () => {

        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")

        let  loginPage = new LoginPage ()

        await loginPage.login("rahulshettyacademy", "learning")

        await console.log ("Alert ------------", await loginPage.alert.getText())


    })

   xit ("End to End test", async() => {
            
            const products = ['iphone X', 'Blackberry']
            let  shopPage = new Shop()
            let  loginPage = new LoginPage ()


             await browser.url("https://rahulshettyacademy.com/angularpractice/shop")

            console.log("Titulo: ---------------------", await browser.getTitle())
        
            await expect(browser).toHaveTitle(expect.stringContaining("ProtoCommerce"))

            shopPage.checkout.waitForExist
            
            await shopPage.addProductsToCart(products)

            await shopPage.checkout.click()

        let reviewPage = new ReviewPage()
        let prices =   await reviewPage.sumOfProducts()
        let totalIntValue =   await reviewPage.totalFormattedPrice()

        await expectchai(prices).to.equal(totalIntValue)

        await reviewPage.purchaseButton.click()

        let purchasePage = new PurchasePage()

        await purchasePage.country.setValue("ind")

        await purchasePage.waitingSpinner.waitForExist({reverse:true})
 
        await purchasePage.selectCountryOption.click()

        await purchasePage.submitButton.click()

       await expect( await purchasePage.alertSuccess).toHaveText(expect.stringContaining("Success"))
          
    })

})