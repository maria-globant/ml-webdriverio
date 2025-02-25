describe('Ecommerce Application', async () => {

    it('Login Fail page', async () => {

        //webdriverio Async

        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")

        console.log("Titulo: ", await browser.getTitle())
    })



}
)