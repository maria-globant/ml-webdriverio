import { $ } from '@wdio/globals'
import Page from './page.js'


/**
 * sub page containing specific selectors and methods for a specific page
 */
class PurchasePage  extends Page {
    
    get country() {
        return $("#country")
    }

    get waitingSpinner() {
        return $(".lds-ellipsis")
    }

    get selectCountryOption() {
        return $("=India")
    }

    get submitButton() {
        return $("input[type = 'submit']")
    }
    

    get alertSuccess() {    
        return $(".alert-success")
    }           
//    async  setValue (countryName) {

      //      await $("#country").setValue("ind")   
      //      await $(".lds-ellipsis").waitForExist({reverse:true})
    /*
            await $("=India").click()
    
            await $("input[type = 'submit']").click()
    
           // await expect( await $(".alert-success")).toHaveTextContaining("Success")
    
           await expect( await $(".alert-success")).toHaveText(expect.stringContaining("Success")) */
    
}

export default PurchasePage;