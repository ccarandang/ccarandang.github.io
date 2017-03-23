/*
	Website Project Rick Roll Button
	April 21, 2016
	Chris Carandang
*/

function load(){
	var link = document.getElementById("rickrollbutton");
	link.addEventListener("click", rickroll);

	var stopButton = document.getElementById("stop");
	stopButton.style.display = "none";
}

// Loads a rick roll in the webpage.
function rickroll(){
	// Hide the button
	var rickRollButton = document.getElementById("rickrollbutton");
	rickRollButton.style.display = "none";

	// Get the div
	var div = document.getElementsByClassName("image")[0];

	// I used the encodeURI method to make the string accept the illegal characters.
	var videolink = encodeURI("https://my.mixtape.moe/efczup.webm");

	// Embed the video to the page
	div.innerHTML = "<video width=\"100px\" height=\"100px\" autoplay><source src=\"" + videolink + "\" type=\"video/mp4\"></video>";

	// Display the stop button
	var stopButton = document.getElementById("stop");
	stopButton.style.display = "inline";

	// Add an event listener for the stop button
	stopButton.addEventListener("click", stopVideo);
}

// Stops the rick rolling (boo! no fun!)
function stopVideo(){
	// Grab the element that houses the video
	var div = document.getElementsByClassName("image")[0];

	// Set the inner HTML back to the normal picture
	div.innerHTML = "<img src=\"images/rickroll.jpg\" class=\"productpic\" alt=\"Rick Rolling\"/>";

	// Add the rick roll button back
	var rickRollButton = document.getElementById("rickrollbutton");
	rickRollButton.style.display = "inline";

	// Hide the stop button
	var stopButton = document.getElementById("stop");
	stopButton.style.display = "none";
}

// Add an event listener for the load event
document.addEventListener("DOMContentLoaded", load)