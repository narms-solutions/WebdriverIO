import homePage from '../pages/home-page';
import HomePage from '../pages/home-page'
describe('Navigation to the menu list',()=>{
    it('Get the menu list and assert them',async()=>{
        //Open the url  
       await HomePage.open();
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
        const navlinks= await HomePage.NavComponent.navMenyList;  

        for(const link of navlinks){
            actualList.push(await link.getText());
        }

        await expect(expectedmenulist).toEqual(actualList);





    });



});