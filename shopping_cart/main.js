let cart = 0;

function addCart(){
cart++;
document.getElementById("cartCount").innerText = cart;
}

document.getElementById("search").addEventListener("keyup",function(){

let value = this.value.toLowerCase();
let cards = document.querySelectorAll(".card");

cards.forEach(card => {

let name = card.querySelector("h3").innerText.toLowerCase();

if(name.includes(value)){
card.style.display="block";
}else{
card.style.display="none";
}

});

});