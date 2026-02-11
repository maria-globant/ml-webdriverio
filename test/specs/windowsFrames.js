import { expect as expectchai } from 'chai'

// comando para correr:: npx wdio run wdio.conf.js 

describe ('Windows and Frames Miscellanous', async() => 
{
    it('Parent and Child windows swtich', async () =>
    {
        await browser.url("/loginpagePractise/")
        await $(".blinkingText").click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
       
        await browser.closeWindow()
        await browser.switchToWindow(handles[0])

        await browser.newWindow("https://google.com")


        await browser.switchWindow("/loginpagePractise/")
        await $("#username").setValue("helloSwitchback")

    }   
    )

})