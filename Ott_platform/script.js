const movies = [
{
title:"Avengers",
img:"https://i.imgur.com/6XGQ6rN.jpg",
video:"https://www.youtube.com/embed/eOrNdBpGMv8"
},
{
title:"Batman",
img:"https://i.imgur.com/3jLPB46.jpg",
video:"https://www.youtube.com/embed/mqqft2x_Aa4"
},
{
title:"Joker",
img:"https://i.imgur.com/5x7QpZp.jpg",
video:"https://www.youtube.com/embed/zAGVQLHvwOY"
},
{
title:"Inception",
img:"https://i.imgur.com/2TeJfXw.jpg",
video:"https://www.youtube.com/embed/YoHD9XEInc0"
}
];

let watchlist = [];

function displayMovies(list){

let container = document.getElementById("movieContainer");
container.innerHTML = "";

list.forEach(movie => {

let div = document.createElement("div");
div.className = "card";

div.innerHTML = `
<img src="${movie.img}">
<div class="overlay">
<h4>${movie.title}</h4>
<button onclick="playMovie('${movie.video}')">▶ Play</button>
<button onclick="addWatchlist('${movie.title}')">❤️ Watchlist</button>
</div>
`;

container.appendChild(div);

});
}

function playMovie(url){
document.getElementById("modal").style.display = "flex";
document.getElementById("video").src = url;
}

function closeModal(){
document.getElementById("modal").style.display = "none";
document.getElementById("video").src = "";
}

function addWatchlist(title){
watchlist.push(title);
alert(title + " added to watchlist");
}

document.getElementById("search").addEventListener("keyup", function(){

let value = this.value.toLowerCase();

let filtered = movies.filter(m =>
m.title.toLowerCase().includes(value)
);

displayMovies(filtered);

});

displayMovies(movies);