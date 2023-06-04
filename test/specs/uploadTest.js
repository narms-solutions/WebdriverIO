const path=require('path');
describe('Simple upoad test', () => {
    it('upload a doc file and assert hte success message', async() => {
        //open the browser url
        await browser.url('https://the-internet.herokuapp.com/upload');

        //store test file path 
        const filePath=path.join(__dirname, '../data/Avista1.jpg');
        //upload file path tto the browser
        const remoteFilePath= await browser.uploadFile(filePath);

        //set the filePath value in the input field  
        await $('#file-upload').setValue(remoteFilePath);
        await $('#file-submit').click();

        //assert the success message  
        await expect($('h3')).toHaveText('File Uploaded!');
        
    });
    it('Uploadfile to the hidden input filed', async() => {
        //open url
        await browser.url('/cart/');
         //store test file path 
         const filePath=path.join(__dirname, '../data/Avista1.jpg');
         //upload file path tto the browser
         const remoteFilePath= await browser.uploadFile(filePath);

         //Remove hidden class using browser  
         await browser.execute("document.querySelector('#upfile_1').className='';");

         await $('#upfile_1').setValue(remoteFilePath);
         await $('#upload_1').click();

         await expect($('#wfu_messageblock_header_1_label_1')).toHaveTextContaining(' uploaded successfully');

        
    });
    
});