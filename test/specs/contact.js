describe('Fill int he contact form', () => {
    it('Enter the  contact form and assert the successfull message ',async () => {
        //open Contact page
        browser.url('/contact');
        await $('.contact-name input').addValue('Narmada');
        await $('.contact-email input').addValue('narmada.nalubolu@avistatime.com');
        await $('.contact-phone input').addValue('+46725493090');
        await $('.contact-message textarea').addValue('complete the form with the given values');
        await $('button[type="submit"]').click();
        //Here addValue -add text to the input fields
        //setValue -clears the value and add the value

        //Assert the success message
        const sucessmessage=await $("[role='alert']");
        const alerttext=await sucessmessage.getText();
       // await expect(alerttext).toEqual('Thanks for contacting us! We will be in touch with you shortly');
        await expect(sucessmessage).toHaveTextContaining('Thanks for contacting us! We will be in touch with you shortly');
        //Instead we can also use toHaveTextconatining (Using containing will ignore any space in the text) (with using getText())
        
    });
    
});