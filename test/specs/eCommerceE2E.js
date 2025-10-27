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
        await $("*=Checkout").waitForExist()
        const cards = await $$("(//div[@class='card h-100'])")

        for (let i=0; i < await cards.length; i++)
        {
            const card = await cards[i].$("div h4 a")
            if ( products.includes(await card.getText()) )
                {
                    console.log ("Esta incluido: ----", await card.getText())
                }

        }

    }
    )
}
)