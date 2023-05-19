////Base Url: https://practice.automationbro.com/  ///////
describe('Learning wdio', ()=>{
    
    it('Open home page and assert title',async()=>{
        //open the base url
        await browser.url('https://practice.automationbro.com');
        //assert the title of the url
       await expect(browser).toHaveTitle('Practice E-Commerce Site – Automation Bro');

    });

       it('open about page and assert url',async() =>{
        //open about page
        await browser.url('https://practice.automationbro.com/about');
        //Assert about page url  
        await expect(browser).toHaveUrl('https://practice.automationbro.com/about/');

       });

       it('click on get started button and assert url contians tet  get-started', async()=>{
        //Open home page  
        await browser.url('https://practice.automationbro.com');  
        //Click on Get-started button  
        await $('#get-started').click();
        //assert url contains text get-started  
        await expect(browser).toHaveUrlContaining('#get-started');
       });

       it('Click on logo and assert Url does not contain text get started',async()=>{
        //clcik on logo button  
        await $('#masthead > div > div > div.tg-block.tg-block--one > div > a').click();  
        //Assert url doesnot caontains Get started text  
        await expect(browser).not.toHaveUrlContaining('#get-started');
       });

       it('Find the heading text and assert',async()=>{
        //Open home page
        browser.url('https://practice.automationbro.com/');
        //find the heading element  
       const headingEl= await $('#primary > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-db85304.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div.elementor-container.elementor-column-gap-no > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-b60806c > div > div > div.elementor-element.elementor-element-578f37f.elementor-widget.elementor-widget-heading > div').getText();
       //Get the heading text from heading element
       //const headingText=await headingEl.getText();

       //Assert text  
       await expect(headingEl).toEqual('Think different. Make different.');
    });

    

});