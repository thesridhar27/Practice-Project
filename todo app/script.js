let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks(){
let list = document.getElementById("taskList");
list.innerHTML = "";

tasks.forEach((task, index) => {

let li = document.createElement("li");

if(task.completed){
li.classList.add("completed");
}

li.innerHTML = `
<span onclick="toggleComplete(${index})">${task.text}</span>
<div class="actions">
<button onclick="editTask(${index})">✏️</button>
<button onclick="deleteTask(${index})">❌</button>
</div>
`;

list.appendChild(li);

});
}

function addTask(){

let input = document.getElementById("taskInput");
let text = input.value;

if(text === ""){
alert("Enter a task");
return;
}

tasks.push({ text: text, completed: false });

input.value = "";

saveTasks();
renderTasks();
}

function deleteTask(index){
tasks.splice(index,1);
saveTasks();
renderTasks();
}

function editTask(index){
let newText = prompt("Edit your task:", tasks[index].text);

if(newText !== null){
tasks[index].text = newText;
saveTasks();
renderTasks();
}
}

function toggleComplete(index){
tasks[index].completed = !tasks[index].completed;
saveTasks();
renderTasks();
}

function toggleMode(){
document.body.classList.toggle("dark");
}

renderTasks();