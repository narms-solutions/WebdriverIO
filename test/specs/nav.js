describe('Navigation to the menu list',()=>{
    it('Get the menu list and assert them',async()=>{
        //Open the url  
        browser.url('/');
        //Add the expected List  

        const expectedmenulist= ["Home",
        "About",
        "Shop",
        "Blog",
        "Contact",
        "My account"
    ];  

        const actualList =[];  
        //find the nav linksor menu elements
        const navlinks= await $('#primary-menu').$$('li[id*=menu]');  

        for(const link of navlinks){
            actualList.push(await link.getText());
        }

        await expect(expectedmenulist).toEqual(actualList);





    });

});