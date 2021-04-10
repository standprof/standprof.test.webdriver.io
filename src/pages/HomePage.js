export default class HomePage {

    visit() {
        browser.url('https://www.standprof.co.uk');
    }
    
    getSectionTitle() {
        return $('h2').getText();
    }

    clickOurServices()  {
        $('a=VIEW OUR SERVICES').click();
    }

    sendEmail(name, emailAddress, details) {
        $$('[type = "text"]')[0].setValue(name);
        $('[type = "email"]').setValue(emailAddress);
        $('[name = "Details"]').setValue(details);
        $('.contact-form-submit-btn').click();
    }

    getThankYouMessage() {
        const message = $('#contactFormResponseContainer');
        message.waitForExist({ timeout:3000 });
        return message.getText();  
    }
}
