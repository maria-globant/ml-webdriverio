import { expect as expectchai } from 'chai'

import LoginPage from '../pageobjects/login.page.js'
import Shop from '../pageobjects/shop.js'
import ReviewPage from '../pageobjects/review.page.js'
import PurchasePage from '../pageobjects/purchase.js'


// comando para correr:: npx wdio run wdio.conf.js 


describe ("Ecommerce Application", async () =>
{
    it ("End to End test - Prueba", async() =>
    {
        const products = ['iphone X', 'Blackberry']

        let  loginPage = new LoginPage ()
        let shop = new Shop()
        let reviewPage = new ReviewPage()
        let purchasePage = new PurchasePage()
    

        await browser.url("/loginpagePractise/")

        await loginPage.login("rahulshettyacademy", "Learning@830$3mK2")
        await loginPage.signIn.click()
    
        await shop.checkout.waitForExist()
        await shop.addProductsToCart (products)
        await shop.checkout.click()


        await reviewPage.purchaseButton.waitForExist()
        let sumOfProducts = await reviewPage.sumOfProducts()
        let totalFormattedPrice = await reviewPage.totalFormattedPrice()

        expectchai (sumOfProducts).to.equal (totalFormattedPrice)

        
        await reviewPage.purchaseButton.click()
        await purchasePage.country.setValue("ind")
        await purchasePage.waitingSpinner.waitForExist({reverse:true})
        await purchasePage.selectCountryOption.click()
        await purchasePage.submitButton.click()
        await expect( purchasePage .alertSuccess).toHaveText(expect.stringContaining("Success"))
    
      
    })

})