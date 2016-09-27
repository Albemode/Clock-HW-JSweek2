function clock() {

	//Save the times in variables
	var today = new Date();
	var hours = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();

	//Set the AM or PM time
	if (hours >= 12){
	  meridiem = "PM";
	} else {
	  meridiem = "AM";
	}

	//convert hours to 12 hour format and put 0 in front
	if (hours>12){
		hours = hours - 12;
	}
	else if (hours===0){
		hours = 12;	
	}

	//Put 0 in front of single digit minutes and seconds

	if (minutes<10){
		minutes = "0" + minutes;
	} else {
		minutes = minutes;
	}

	if (seconds<10){
		seconds = "0" + seconds;
	} else {
		seconds = seconds;
	}
	// displaying time
	document.getElementById("clock").innerHTML = (hours + ":" + minutes + ":" + seconds + meridiem);

	// var day_night = 
	if (meridiem == "AM") {
		document.getElementById("bg").setAttribute("src", "images/day.jpg")
	} else if (meridiem == "PM") {
		document.getElementById("bg").setAttribute("src", "images/night.jpg")
	}
}

setInterval("clock()", 1000);

// take two images, depending on the day or night, image switches

