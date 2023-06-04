class ContactPage{
    open(){
      return  browser.url('/contact');
        
    }
    get UserName(){
        return $('.contact-name input');
    }
    get EmailId(){
        return $('.contact-email input');
    }
    get PhoneNumber(){
        return $('.contact-phone input');
    }
    get AddMessageArea(){
        return $('.contact-message textarea');
    }
    get SubmitButton(){
        return $('button[type="submit"]');
    }
    get SuccessMessage(){
        return  $("[role='alert']");
    }
    async SubmitForm(name,email, phone,text){
        await this.UserName.addValue(name);
        await this.EmailId.addValue(email);
        await this.PhoneNumber.addValue(phone);
        await this.AddMessageArea.addValue(text);
        await this.SubmitButton.click();
    }
}
export default new ContactPage();