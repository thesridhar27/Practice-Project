/*  // Selecting button element
var btn = document.querySelector("#myBtn");
var userInput = document.querySelector("#user-input");
var container = document.querySelector("#container");
var body = document.querySelector("body");

var monday = ["ECO323", "IFS353", "MAN305", "IFS362"];
var tuesday = ["IFS353", "MAN305"];
var wednesday = ["IFS362", "MAN303", "ECO341"];
var thursday = ["IFS353", "MAN302", "STATS302"];
var friday = ["No class! YAY! :)"];

// When hover over button change colour
function setHoverColor() {
    btn.style.background = "#DC143C";
}

// When not hovering restore to normal colour
function setNormalColor() {
    btn.style.background = "";
}

// Assigning event listeners to the button
// btn.addEventListener("click", sayHello);
btn.addEventListener("mouseover", setHoverColor);
btn.addEventListener("mouseout", setNormalColor);
btn.addEventListener("click", printTimetable);

function printTimetable()
{
    // Monday's timetable
    if (userInput.value == "Monday")
    {
        for (var i = 0; i < monday.length; i++) {
            // alert(monday[i]);
            // container.appendChild(document.createElement("p").innerHTML = monday[i]);
            var paraText = document.createElement("p");
            var paraNode = document.createTextNode(monday[i]);
            paraText.appendChild(paraNode);
            container.appendChild(paraText);
        }
    }
}

// Tuesday's Timetable
if (userInput.value == "Tuesday")
{
    for (var i = 0; i < tuesday.length; i++) {

        // alert(monday[i]);
        // container.appendChild(document.createElement("p").innerHTML = monday[i]);

        var paraText = document.createElement("p");
        var paraNode = document.createTextNode(tuesday[i]);

        paraText.appendChild(paraNode);
        container.appendChild(paraText);
    }
}

// Wednesday's timetable
if (userInput.value == "Wednesday")
{
    for (var i = 0; i < wednesday.length; i++) {

        // alert(monday[i]);
        // container.appendChild(document.createElement("p").innerHTML = monday[i]);

        var paraText = document.createElement("p");
        var paraNode = document.createTextNode(wednesday[i]);

        paraText.appendChild(paraNode);
        container.appendChild(paraText);
    }
}

// Thursday's Timetable
if (userInput.value == "Thursday")
{
    for (var i = 0; i < thursday.length; i++) {

        // alert(monday[i]);
        // container.appendChild(document.createElement("p").innerHTML = monday[i]);

        var paraText = document.createElement("p");
        var paraNode = document.createTextNode(thursday[i]);

        paraText.appendChild(paraNode);
        container.appendChild(paraText);
    }
}


// Friday's Timetable
if (userInput.value == "Friday")
{
    for (var i = 0; i < friday.length; i++) {

        // alert(monday[i]);
        // container.appendChild(document.createElement("p").innerHTML = monday[i]);

        var paraText = document.createElement("p");
        var paraNode = document.createTextNode(friday[i]);
        var img = document.createElement("img");

        img.src = "friday-meme.jpg";

        paraText.appendChild(paraNode);
        container.appendChild(paraText);

        paraText.style.cssText = "font-size:24px;";
        body.appendChild(img);
    }
} 
 */
// Selecting elements
var btn = document.querySelector("#myBtn");
var userInput = document.querySelector("#user-input");
var container = document.querySelector("#container");
var body = document.querySelector("body");

var monday = ["ECO323", "IFS353", "MAN305", "IFS362"];
var tuesday = ["IFS353", "MAN305"];
var wednesday = ["IFS362", "MAN303", "ECO341"];
var thursday = ["IFS353", "MAN302", "STATS302"];
var friday = ["No class! YAY! :)"];

// Hover effects
btn.addEventListener("mouseover", function() { btn.style.background = "#DC143C"; });
btn.addEventListener("mouseout", function() { btn.style.background = ""; });
btn.addEventListener("click", printTimetable);

function printTimetable() {
    // 1. Clear previous results so they don't stack
    container.innerHTML = ""; 
    var day = userInput.value.trim();

    // 2. Monday
    if (day === "Monday") {
        for (var i = 0; i < monday.length; i++) {
            var paraText = document.createElement("p");
            var paraNode = document.createTextNode(monday[i]);
            paraText.appendChild(paraNode);
            container.appendChild(paraText);
        }
    } 
    // 3. Tuesday
    else if (day === "Tuesday") {
        for (var i = 0; i < tuesday.length; i++) {
            var paraText = document.createElement("p");
            var paraNode = document.createTextNode(tuesday[i]);
            paraText.appendChild(paraNode);
            container.appendChild(paraText);
        }
    } 
    // 4. Wednesday
    else if (day === "Wednesday") {
        for (var i = 0; i < wednesday.length; i++) {
            var paraText = document.createElement("p");
            var paraNode = document.createTextNode(wednesday[i]);
            paraText.appendChild(paraNode);
            container.appendChild(paraText);
        }
    } 
    // 5. Thursday
    else if (day === "Thursday") {
        for (var i = 0; i < thursday.length; i++) {
            var paraText = document.createElement("p");
            var paraNode = document.createTextNode(thursday[i]);
            paraText.appendChild(paraNode);
            container.appendChild(paraText);
        }
    } 
    // 6. Friday
    else if (day === "Friday") {
        for (var i = 0; i < friday.length; i++) {
            var paraText = document.createElement("p");
            var paraNode = document.createTextNode(friday[i]);
            var img = document.createElement("img");
            img.src = "friday-meme.jpg";
            paraText.appendChild(paraNode);
            container.appendChild(paraText);
            paraText.style.cssText = "font-size:24px;";
            body.appendChild(img);
        }
    }
}