	function calcBMI() {
		
	
	//get height in feet, height in inches, weight from form and store in 3 variables feet, inches, weight
var feet = parseFloat(document.getElementById('feet').value);
var inches = parseFloat(document.getElementById('inches').value);
var weight = parseFloat(document.getElementById('weight').value);
		
	
	//convert height in feet and inches to total inches and store in another variable height
var totalinches = (feet*12) + inches;

	 //calculate bmi using the formula, store in a variable called bmi

	var bmi = (weight*703)/totalinches;
	//display bmi on the html page
document.getElementById("bmi").innerHTML = bmi;
		
} // end

	
	 