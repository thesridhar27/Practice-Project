// 🔐 LOGIN
function login(){

let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;

if(user === "admin" && pass === "1234"){
window.location.href = "index.html";
}else{
document.getElementById("error").innerText = "Invalid Login";
}

}


// 👨‍🎓 DEFAULT 60 STUDENTS
const defaultStudents = [
"Student 1","Student 2","Student 3","Student 4","Student 5",
"Student 6","Student 7","Student 8","Student 9","Student 10",
"Student 11","Student 12","Student 13","Student 14","Student 15",
"Student 16","Student 17","Student 18","Student 19","Student 20",
"Student 21","Student 22","Student 23","Student 24","Student 25",
"Student 26","Student 27","Student 28","Student 29","Student 30",
"Student 31","Student 32","Student 33","Student 34","Student 35",
"Student 36","Student 37","Student 38","Student 39","Student 40",
"Student 41","Student 42","Student 43","Student 44","Student 45",
"Student 46","Student 47","Student 48","Student 49","Student 50",
"Student 51","Student 52","Student 53","Student 54","Student 55",
"Student 56","Student 57","Student 58","Student 59","Student 60"
];


// LOAD STUDENTS
function loadStudents(){

let list = document.getElementById("studentList");
list.innerHTML = "";

defaultStudents.forEach((name, index)=>{

let tr = document.createElement("tr");

let tdName = document.createElement("td");
tdName.innerText = name;

let tdCheck = document.createElement("td");

let checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.checked = true; // ✅ default present
checkbox.onchange = updateSummary;

tdCheck.appendChild(checkbox);

tr.appendChild(tdName);
tr.appendChild(tdCheck);

list.appendChild(tr);

});

updateSummary();
}


// 📊 UPDATE COUNTS
function updateSummary(){

let checkboxes = document.querySelectorAll("#studentList input");

let total = checkboxes.length;
let present = 0;

checkboxes.forEach(cb=>{
if(cb.checked) present++;
});

let absent = total - present;

document.getElementById("total").innerText = "Total: " + total;
document.getElementById("present").innerText = "Present: " + present;
document.getElementById("absent").innerText = "Absent: " + absent;

}