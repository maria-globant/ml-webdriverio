import { $ } from '@wdio/globals'
import Page from './page.js'

/*
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
*/



/**
 * sub page containing specific selectors and methods for a specific page
 */
class Shop extends Page {
    
    get checkout() {
        return $(".nav-link.btn.btn-primary")
    }

    get cards() {
        return $$("(//div[@class='card h-100'])")
    }

    async addProductsToCart (products) {
                    for (let i=0; i < await this.cards.length; i++)
                    {
                        const card = await this.cards[i].$("div h4 a")
            
                        if ( products.includes(await card.getText()) )
                        {
                                await this.cards[i].$(".card-footer button").click()
                                
                        }
                    }
    
    }

    
}

export default Shop;