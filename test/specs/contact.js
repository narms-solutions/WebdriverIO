//import contactPage from "../pages/contact-page";
import ContactPage from "../pages/contact-page";
describe('Fill the contact form', () => {
    it('Enter the  contact form and assert the successfull message ',async () => {
        //open Contact page
        await ContactPage.open();

        
        await ContactPage.SubmitForm('Narmada','narmada@gmail.com','0725493090','This is a sample text message');
        //Here addValue -add text to the input fields
        //setValue -clears the value and add the value

        //Assert the success message
        const sucessmessage=await ContactPage.SuccessMessage;
        
        //const alerttext=await sucessmessage.getText();
        //await expect(alerttext).toEqual('Thanks for contacting us! We will be in touch with you shortly');
        await expect(sucessmessage).toHaveTextContaining('Thanks for contacting us! We will be in touch with you shortly');
        //Instead we can also use toHaveTextconatining (Using containing will ignore any space in the text) (with using getText())
        
    });
    
});