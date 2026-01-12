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

    get totalValue () {
        return $("h3 strong")
    }

    async  sumOfProducts () {
    
        const productPrices = await this.productPrices;
        let suma =  0
        for (let i=0; i < productPrices.length; i++) {

            let  precio1  = await productPrices[i].getText()
            let precio2 = precio1.split(".")[1].trim()
            suma += parseInt(precio2)
       }
    
       return suma
    }

    async totalFormattedPrice () {

        const totalValue = await this.totalValue.getText()
        const totalIntValue = parseInt(totalValue.split(".")[1].trim())
        return totalIntValue

    }

    
}

export default ReviewPage;