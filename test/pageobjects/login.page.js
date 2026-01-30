import { $ } from '@wdio/globals'
import Page from './page.js' 

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        //console.log(" username  ------------- ", await $('#username').isDisplayed());

         return $('#username' );
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#signInBtn');
    }

    get alert() {
        return $(".alert-danger")
    }

    get signIn () {
        return $("#signInBtn")
    }

    get textInfo  () {
        return $("p")
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
       // await this.inputUsername.waitForDisplayed({ timeout: 5000 });

       const currentUrl = await browser.getUrl();
console.log('La URL actual es:', currentUrl);

       console.log("username ------------------", username)
        console.log("password ------------------", password)

        await this.inputUsername.waitForExist({ timeout: 5000 });
        await this.inputUsername.waitForDisplayed({ timeout: 5000 });
 
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }


    


}

export default LoginPage;
