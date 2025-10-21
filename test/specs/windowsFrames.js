import { expect as expectchai } from 'chai'

// comando para correr:: npx wdio run wdio.conf.js 

describe ('Windows and Frames Miscellanous', async() => 
{
    it('Parent and Child windows swtich', async () =>
    {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await $(".blinkingText").click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
       
        console.log( "H1 ----------------------------- ",await $("h1").getText())
        console.log("Title ---------------------------------", await browser.getTitle())
        await browser.closeWindow()
        await browser.switchToWindow(handles[0])
        console.log("Title2  ---------------------------------", await browser.getTitle())

        
    }   
    )

})