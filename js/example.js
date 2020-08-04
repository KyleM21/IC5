// ADD NEW ITEM TO END OF LIST
//document.getElementById("one").innerHTML = "test";

	var ul = document.getElementById("itemList");

	var li = document.createElement("li");
		li.appendChild(document.createTextNode("cream"));
		li.id = "five";
		ul.appendChild(li);

// ADD NEW ITEM START OF LIST
	var li2 = document.createElement("li");
		li2.appendChild(document.createTextNode("kale"));
		li2.id = "zero";
		ul.prepend(li2);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
	li.className = "cool";
	li2.className = "cool";
	
	var itemList = ul.getElementsByTagName("li");
		for (var i = 0; i < itemList.length; ++i) {
		  itemList[i].className ="cool";
		}
		
// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
	var header = document.getElementById("header2");
	var length = itemList.length;
	
	/*var counter = document.createElement("h2");
	counter.appendChild(document.createTextNode(length));
	counter.className = "h2 span";	*/
	
	var counter = document.createElement("span");
	counter.setAttribute("class","h2");
	counter.innerHTML = length;
	header.append(counter);