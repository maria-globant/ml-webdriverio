import { $ } from '@wdio/globals'
import Page from './page.js'


/**
 * sub page containing specific selectors and methods for a specific page
 */
class ReviewPage  extends Page {
    
    get productPrices() {
        return $$("//tr/td[4]/strong")
    }

    get cards() {
        return $$("(//div[@class='card h-100'])")
    }

    async  sumOfProducts () {
            //const productPrices = await $$("//tr/td[4]/strong")

        console.log (" Product Prices length ---------------", await this.productPrices.length)
        
        const productPrices = await this.productPrices;

       for (let i=0; i < productPrices.length; i++) {
            console.log(" Precio Producto --------------", i, await productPrices[i].getText());
       }


      /*  const sumaProductos = (
                await Promise.all(
                    this.productPrices.map(async (productPrice) =>
                        parseInt((await productPrice.getText()).split(".")[1].trim())
                    )
                )
)           .reduce((accum, price) => accum + price, 0);
        
        //console.log(" Sum of products  objeto ----------------", sumaProductos)

        /*
       const textPrice = await productPrices.map( async (text) => await (text.getText()))
       const prices = await textPrice.map( price => parseInt(price.split(".")[1].trim())).reduce( (accum, price) => accum+price, 0)
        console.log("product Prices Reduce ----------------",  prices)


       const totalValue = await $("h3 strong").getText()
       const totalIntValue = parseInt(totalValue.split(".")[1].trim())

       */
    }

    async totalFormattedPrice () {

                const prices = await textPrice.map( price => parseInt(price.split(".")[1].trim())).reduce( (accum, price) => accum+price, 0)
                console.log("product Prices Reduce ----------------",  prices)

    }

    
}

export default ReviewPage;