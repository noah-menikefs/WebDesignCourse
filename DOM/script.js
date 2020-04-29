//caching all selectors as variables
var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var deleteButtons = document.getElementsByClassName("delete");
var items = document.querySelectorAll("li");


function inputLength(){
	return input.value.length;
}

function createListElement(){
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	// btn.innerHTML = "Delete";
	btn.addEventListener("click",deleteItem);

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	// li.innerHTML = input.value;
	input.value = "";
	li.addEventListener("click",finishListItem);
	
	li.appendChild(btn)
	ul.appendChild(li);
}

function addListAfterClick(){
	if (inputLength() > 0){
		createListElement();
	}
}

function addListAfterKeypress(event){
	if (inputLength() > 0 && event.which === 13){
		createListElement();
	}
}

function finishListItem(event){
	event.target.classList.toggle('done');
}

function deleteItem(event){
	event.target.removeEventListener("click",deleteItem);
	event.target.parentNode.remove();
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

for (var i = 0; i < deleteButtons.length; i++){
	deleteButtons[i].addEventListener("click",deleteItem);
	items[i].addEventListener("click",finishListItem);
}