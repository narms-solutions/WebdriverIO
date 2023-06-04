import BlogPage from '../pages/blog-page'
describe('Check the blogs', () => {
    it('', async()=>{
        await BlogPage.Open();
        //get the recentpost list  
        const recentpostlist=await BlogPage.recentPostList;
        //loop the length of the text is greater than 10  
        for(const item of recentpostlist){
            const text= await item.getText();
            await expect(text.length).toBeGreaterThan(10);
        }

        //assert the number of posts  
        await expect(recentpostlist).toHaveLength(5);

    });
    
});