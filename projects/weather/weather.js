 "using strict;"
//window.alert("conneted");

// add click cutton 
document.getElementById("forecast").addEventListener("click", getData);
document.getElementById("domLoaded").addEventListener("click",getData);


function getData(){
	//console.log("clicked");
	
	//get zip code 
	var zipcode = 
	document.getElementById("zipcode").value;
	//console.log(zipcode);
	getWeather(zipcode);
		
}

function getWeather(zip) {
	//console.log("zip is" + zip);
	
	var endpoint = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey = "1307007a7da1aeb5b59930a312a42cd3";
	
	var queryString = "zip=" + zip + "&units=imperial&appid=" + apiKey; 
	
	var url = endpoint + "?" + queryString;
	//console.log("url is" + url);
	
	//create object
	var xhr = new XMLHttpRequest();
	//set up action response
	xhr.addEventListener("load", responseReceivedHandler);
	//required for JSON 
	xhr.responseType = "json";
	//open connection 
	xhr.open("GET", url);
	//send data
	xhr.send();
	
}

function responseReceivedHandler() {
	var weatherInfo = 
		document.getElementById("weatherInfo");
	if (this.status === 200) {
		//console.log(this.response);
		//console.log("city is " + this.response.name);
		//console.log("temp is " + this.response.main.temp);
		//console.log("description is" + this.response.weather[0].description);
		//console.log("temp is" + this.response.main.temp);
		var data = this.response;
		
		weatherInfo.innerHTML =  
			"<p>City: " + data.name + "</p>" + "<p>Current temp: " + this.response.main.temp + " &deg;F</p>" + "<p>Desc: " + this.response.weather[0].description + "</p>" + "<p>Humiditiy: " + data.main.humidity + "%</p>";
			
	}
	else {
		weatherInfo.innerHTML = "Weather data unavailable."
	}
}





	var cInput = document.getElementById("cInput").value;
	return cInput * (9 / 5) + 32;
	return degreesCelsius;