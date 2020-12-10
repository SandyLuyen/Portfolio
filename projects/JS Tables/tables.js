"using strict;"

//window.alert("connected");
//create the data for the table here
var products = [
	{item: "Green Milk tea", price: 4.50},
	{item: "Dirty Boba", price: 4.90},
	{item: "Brown Sugar Milk", price: 5.10}
];



//console.log("length is " + products.length);
//console.log(products [0]);
//console.log("item is " + products[0].item);
//console.log("price is " + products[0].price);
//create a variable for the HTML code

//to build the table

var tableHTML = "<table>" +
		"<caption>Menu</caption>" +
		"<tr><th>Item</th><th>Price</th></tr>";
//console.log(tableHTML);

for(var i = 0; i < products.length; i++){
	//add the rows for products 
	tableHTML += "<tr><td>" + products[i].item +
				"</td><td>" + products[i].price +
				"</td></tr>";
}

//close the table

tableHTML = tableHTML + "</table";
console.log(tableHTML);

//display this table in the div in html 
document.getElementById("table").innerHTML = tableHTML;