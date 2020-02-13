function submit_form(){
	let email = document.getElementById("email_id").value;
	let feedback = document.getElementById("feedback").value;
	let date = new Date();
	let current_time = date.getTime();

		email = email.trim();
		feedback = feedback.trim();

		let feedback_object = {
			"email": email,
			"feedback": feedback,
			"id": current_time
		}

		//console.log(feedback_object);
		if(email.length == 0){
			alert("Please enter your email");
		}else if(feedback.length == 0){
			alert("Please enter your Feedback");
		}else{
			let stored_feedback = localStorage.getItem("stored_feedback");

			//check if any feedback has been stored before...
			let users_feedback = [];
			if(stored_feedback == null || stored_feedback == undefined){
				//No feedback has been submitted before...
				users_feedback.push(feedback_object);
				users_feedback = JSON.stringify(users_feedback);
				localStorage.setItem("stored_feedback", users_feedback);
				alert("Submitted successfully!");
			}else{
				//feedback has been submitted before...
				users_feedback = JSON.parse(stored_feedback);
				users_feedback.push(feedback_object);
				users_feedback = JSON.stringify(users_feedback);
				localStorage.setItem("stored_feedback", users_feedback);
				alert("submitted successfully!");
			}
		}
}