window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
	// get elements
	var convertButton = document.getElementById("convertButton");
	var cInput = document.getElementById("cInput");
	var fInput = document.getElementById("fInput");	
	var weatherImage = document.getElementById("weatherImage");
	var errorMessage = document.getElementById("errorMessage");
	
	
	// register click event handler for the convert button using addEventListener
	convertButton.addEventListener("click", () => {
		var celcius = parseFloat(cInput.value);
		var fah = parseFloat(fInput.value);
		
		// ERROR HANDLINGS 
		//if both inputs are empty
		if (cInput.value === "" && fInput.value === "") {
			errorMessage.innerText = "Please enter a degree in either fields.";
			return;
		};
		
		// if celcius is empty, but fah is not a number input
		if (cInput.value === "" && isNaN(fah)) {
			errorMessage.innerText = fInput.value + " is not a number";
			return;
		};
		
		// if fah is empty, but celcius is not a number input
		if (fInput.value === "" && isNaN(celcius)) {
			errorMessage.innerText = cInput.value + " is not a number";
			return;
		};
		
		//reset values
		errorMessage.innerText = "";
		
		
		if (isNaN(celcius)) {
			// convert F to C
			cInput.value = convertFtoC(fah);
		} else if (isNaN(fah)) {
			// convert C to F
			fInput.value = convertCtoF(celcius);
		};

		// change image to reflect the temperature
		var f = parseFloat(fInput.value);
		
		if (f < 32) {
			weatherImage.src = "cold.gif"
		} else if (f <= 50) {
			weatherImage.src = "cool.gif"
		} else if (f > 50) {
			weatherImage.src = "warm.gif"
		};
	});
	
	// ensure that only 1 text field contains a value using input event handler
	cInput.addEventListener('input', function() {
		fInput.value = "";
	});
	fInput.addEventListener('input', function() {
		cInput.value = "";
	});
}
	
function convertCtoF(degreesCelsius) {
	// TODO: Complete the function
	var degreesFahrenheit = degreesCelsius * (9/5.0) + 32;
	return degreesFahrenheit;
}

function convertFtoC(degreesFahrenheit) {
   // TODO: Complete the function
	var degreesCelsius = (degreesFahrenheit - 32) * (5/9.0);
	return degreesCelsius;
}

