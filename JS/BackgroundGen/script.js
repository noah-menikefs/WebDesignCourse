var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("body");
var btn = document.querySelector("button");


function randomChange(){
	console.log("click");
	body.style.background = "linear-gradient(to right, " + "rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")" + "," + "rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")" + ")";

	css.textContent = body.style.background + ";";

}

function changeColor(){
	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";


	css.textContent = body.style.background + ";";
	// css.innerHTML = body.style.background + ";";
}

color1.addEventListener("input",changeColor);

color2.addEventListener("input",changeColor);

btn.addEventListener("click",randomChange);