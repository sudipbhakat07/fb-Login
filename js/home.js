	
	
	let loginBtn = document.getElementById('Login');

	//Function to set the entered email in localStorage.
	loginBtn.addEventListener('click', function (e) {
		let emailTxt = document.getElementById('email-input');
		let emails = localStorage.getItem('emails');
		
		if (emails === null) {
			 emailsObj = [];
		} else {
			emailsObj = JSON.parse(emails);
		}
		emailsObj.push(emailTxt.value);
		localStorage.setItem("emails", JSON.stringify(emailsObj));
	
	})
	
	//Function to set the entered password in localStorage.
	let loginBtn1 = document.getElementById('Login');
	loginBtn1.addEventListener('click', function (e) {
		let passwordTxt = document.getElementById('password-input');
		let passwords = localStorage.getItem('passwords');
		
		if (passwords === null) {
			 passwordsObj = [];
		} else {
			passwordsObj = JSON.parse(passwords);
		}
		passwordsObj.push(passwordTxt.value);
		localStorage.setItem("passwords", JSON.stringify(passwordsObj));
	
	})
	
	
	