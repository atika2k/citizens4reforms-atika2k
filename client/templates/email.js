Template.kontakt.events({
	'submit form#contactForm':function(e){
		var contactForm = $(e.currentTarget),
			fname = contactForm.find('#Name').val(),
			
			email = contactForm.find('#contact-email').val(),
			
			message = contactForm.find("#contact-message").val();

		//isFilled and isEmail are my helper methods, which checks if variable exists or is email address valid
		if(isFilled(fname) && isFilled(email)  && isFilled(message) && isEmail(email)){
			var dataText = "Message from: " + fname + "\rEmail: " + email + "\rContent:" + message;

			Meteor.call('sendEmail', dataText);
			//throwAlert is my helper method which creates popup with message
			throwAlert('Email send.', 'success');
		}else{
			throwAlert('An error occurred. Sorry', 'error');
			return false;
		}
	}
});