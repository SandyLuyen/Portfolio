//this.window.alert("connected");
function add() {
	//console.log("button clicked");
	
	//make sure both text boxes have data
	if (document.getElementById("num1").value === "" ||
	   document.getElementById("num2").value === ""){
		window.alert("missing data");
	} else {
	
	//num1 from textbox 
	var num1 = parseInt(document.getElementById("num1").value);
	console.log("num1 is " + num1);
	
	//num2 from textbox
	var num2 = parseInt(document.getElementById("num2").value);
	console.log("num2 is " + num2);
	
	//calculate sum
	var sum = num1 + num2;
	console.log("sum is " + sum);
	
	//display sum on page
	document.getElementById("sum").innerHTML = sum;

	}
}

function reset(){
	//clear the textboxes and the sum
	document.getElementById("num1").value = "";
	document.getElementById("num2").value = "";
	document.getElementById("sum"
}