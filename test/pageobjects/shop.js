import { $ } from '@wdio/globals'
import Page from './page.js'


/**
 * sub page containing specific selectors and methods for a specific page
 */
class Shop extends Page {

    get checkout() {
        return $(".nav-link.btn.btn-primary")
    }

    get title() {

        return $(".navbar-brand")
    }
    // Title : .navbar-expand-sm

    get cards() {
        return $$("(//div[@class='card h-100'])")
    }

    async waitNewPage() {
        await browser.waitUntil(async () => (await browser.getUrl()).includes("/angularpractice/shop"), {
            timeout: 10000,
            interval: 1000,
            timeoutMsg: "Shop page did not load"
        })
    }

    async addProductsToCart(products) {
        for (let i = 0; i < await this.cards.length; i++) {
            const card = await this.cards[i].$("div h4 a")

            if (products.includes(await card.getText())) {
                await this.cards[i].$(".card-footer button").click()

            }
        }

    }

}

export default Shop;