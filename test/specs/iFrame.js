describe('Working with iFrame', () => {
    it('Access iFrame and assert logo exist', async() => {
        //open url  
        await browser.url('https://practice.automationbro.com/iframe-sample/');

        

        //access to iframe 
        const iframe=await $('#advanced_iframe')
        await browser.switchToFrame(iframe);

        //assert logo exist
        await expect($('#site-logo')).toExist();

        //Return to parentframe 
        await browser.switchToParentFrame();
        //asser the h1 title on parent frame

        await expect($('h1.tg-page-header__title')).toHaveText('IFrame Sample');
        
    });
    
});