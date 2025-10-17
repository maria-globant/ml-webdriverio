import { expect as expectchai } from 'chai'

Describe ('Windows and Frames Miscellanous', async() => 
{
    it('Parent and Child windows swtich', async() =>
    {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await $(".blinkingText[href='https://rahulshettyacademy.com/documents-request']").click
        console.log( "H1 ----------------------------- ",await $("h1").getText())
    }   
    )

})