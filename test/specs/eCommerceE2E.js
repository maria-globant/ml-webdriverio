import { expect as expectchai } from 'chai'

// comando para correr:: npx wdio run wdio.conf.js 


describe ("Ecommerce Application", async () =>
{
    it ("End to End test", async() =>
    {
        const products = ['iphone X', 'Blackberry']
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await $("input[name='username']").setValue("rahulshettyacademy")
        const password = $("//input[@id='password']")
        await password.setValue("learning")
        await $("#signInBtn").click()
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


    }


    )
}
)