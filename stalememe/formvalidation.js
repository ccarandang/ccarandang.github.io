/*
	Website Project Form Validation
	April 21, 2016
	Chris Carandang
*/

// Code from Assignment 7
function trim(str) 
{
	// Uses a regex to remove spaces from a string.
	return str.replace(/^\s+|\s+$/g,"");
}

function load(){
	// Hide the errors
	hideErrors();

	// Set focus to the first textbox
	document.getElementById("fullname").focus();

	// Add an event listener for the submit button
	var submitButton = document.getElementById("submit");
	submitButton.addEventListener("click", validate);

	// Add an event listener for the clear button
	var resetButton = document.getElementById("clear");
	resetButton.addEventListener("click", resetForm);
}

// Hides all of the errors
function hideErrors(){
	// Make an array of the errorfield names
	var errorFields = ["fullname", "phone", "phoneinvalid", "email", "emailinvalid", "comments"];

	// Go through all of the errors
	for(var i = 0; i < errorFields.length; i++){
		// Hide the error
		document.getElementById(errorFields[i] + "_error").style.display = "none";
	}
}

// Does the validation
function validate(e){
	// Hide errors
	hideErrors();

	// When the form has errors
	if(formHasErrors()){
		// 	Prevents the form from submitting
		e.preventDefault();
		// 	Returning false prevents the form from submitting
		return false;
	}
	else{
		// Submit the form
		return true;
	}
	
}

// Checks the form for errors
function formHasErrors(){
	// Make an errorflag, set to false
	var errorFlag = false;

	// Grab the full name textbox
	var fullNameField = document.getElementById("fullname");

	// When the full name field has no input
	if(!formFieldHasInput(fullNameField)){
		// Display the error
		document.getElementById("fullname_error").style.display = "block";

		// When the error flag is still false (this is the first error)
		if(!errorFlag){
			// Set focus and select all text
			fullNameField.focus();
			fullNameField.select();
		}

		// Set the error flag to true
		errorFlag = true;
	}

	// Get the phone number field
	var phoneNumberField = document.getElementById("phone");

	// Create a new regex for the phone number (10 digits)
	var phoneNumberRegEx = new RegExp(/^\d{10}$/);

	// When the phone number field has no input
	if(!formFieldHasInput(phoneNumberField)){
		// Display the error
		document.getElementById("phone_error").style.display = "block";

		// When the error flag is still false (this is the first error)
		if(!errorFlag){
			// Set focus and select all text
			phoneNumberField.focus();
			phoneNumberField.select();
		}

		// Set the error flag to true
		errorFlag = true;
	}
	// When the user's input doesn't match the regex
	else if(!phoneNumberRegEx.test(phoneNumberField.value)){
		// Display the error
		document.getElementById("phoneinvalid_error").style.display = "block";

		// When the error flag is still false (this is the first error)
		if(!errorFlag){
			// Set focus and select all the text
			phoneNumberField.focus();
			phoneNumberField.select();
		}

		// Set the error flag to true
		errorFlag = true;
	}

	// Get the email address field
	var emailField = document.getElementById("email");

	// Create a new regex for the email address
	var emailRegEx = new RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

	// When the email address field has no input
	if(!formFieldHasInput(emailField)){
		// Display the error
		document.getElementById("email_error").style.display = "block";

		// When the error flag is still false (this is the first error)
		if(!errorFlag){
			// Set the focus and select all text
			emailField.focus();
			emailField.select();
		}

		// Set the error flag to true
		errorFlag = true;
	}
	// When the user's input doesn't match the regex
	else if(!emailRegEx.test(emailField.value)){
		// Display the error
		document.getElementById("emailinvalid_error").style.display = "block";

		// When the error flag is still false (this is the first error)
		if(!errorFlag){
			// Set the focus and select all the text
			emailField.focus();
			emailField.select();
		}

		// Set the error flag to true
		errorFlag = true;
	}

	// Get the comments/message field
	var commentsField = document.getElementById("comments");

	// When the comments field has no input
	// ** Required input because the user should be filling the form to contact us and give a message. **
	if(!formFieldHasInput(commentsField)){
		// Display the error
		document.getElementById("comments_error").style.display = "block";

		// When the error flag is still false (this is the first error)
		if(!errorFlag){
			// Set the focus and select all the text
			commentsField.focus();
			commentsField.select();
		}

		// Set the error flag to true
		errorFlag = true;
	}

	// Return the error flag
	return errorFlag;
}

// Code taken from Assignment 7
 function formFieldHasInput(fieldElement)
{
	// Check if the text field has a value
	if ( fieldElement.value == null || trim(fieldElement.value) == "" )
	{
		// Invalid entry
		return false;
	}
	
	// Valid entry
	return true;
}

// Resets the form
function resetForm(e){
	// When the user clicks yes to the dialog box
	if(confirm("Reset Form?")){
		// Hide all the errors
		hideErrors();

		// Set the focus to the first textbox
		document.getElementById("fullname").focus();

		// Return true to proceed with the action
		return true;
	}

	// Prevent the default if the user clicks no
	e.preventDefault();

	// Return false
	return false;
	
}

// Add an event listener for the load event
document.addEventListener("DOMContentLoaded", load);

