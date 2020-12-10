"using strict;"
//your name here
//Sandy Luyen

//create array of objects 
//each product is an object with item and price 
//{item: "itemname": price: 10}
var inventory = [
//add objects
	{item: "Earrings", price: 80},
	{item: "Necklace", price: 60},
	{item: "Bracelets", price: 50},
	{item: "Cats", price: 100},
	{item: "Dogs", price: 95}
	
];

//declare any global variables
var grandtotal = 0;
var tableHTML = "<table>" +
		"<caption>Menu</caption>" +
		"<tr><th>Item</th><th>Price</th></tr>";
//console.log(tableHTML);


//display the inventory in a table on the webpage
	for(var i = 0; i < inventory.length; i++){
	//add the rows for products 
	tableHTML += "<tr><td>" + inventory[i].item +
				"</td><td>" + inventory[i].price +
				"</td></tr>";
}	


function addItem()
{	
   //function to add items to order
	var itemName = document.getElementById("item").value;
	var itemprice = findPrice(itemName);
	if (itemprice === -1) {
		window.alert("item not found"); 
	} else {
		var qty = document.getElementById("qty").value;
		var itemtotal = qty * itemprice;
		grandtotal = grandtotal + itemtotal;
		document.getElementById("order-total").innerHTML = grandtotal;
		
		
		var addItem = document.createElement("span");
		var text = document.createTextNode(qty + itemName + " at " + itemprice + " each = " + itemtotal );
		addItem.appendChild(text);
	document.getElementById("receipt").appendChild(addItem);
	} //textarea cannot accept a child div?
	
	

}






//close the table

tableHTML = tableHTML + "</table";
console.log(tableHTML);

//display this table in the div in html 
document.getElementById("table").innerHTML = tableHTML;





//this function searches for a product and returns the price
//or -1 if the product is not found
//DO NOT CHANGE THIS CODE
function findPrice(useritem)
{
    //search the inventory, return price or -1
    for (var i = 0; i < inventory.length; i++)
		
	
		
    {
        if (inventory[i].item == useritem)
            return inventory[i].price;
    }
    //not found, return -1
    return -1;
}



