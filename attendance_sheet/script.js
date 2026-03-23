let students = JSON.parse(localStorage.getItem("students")) || [];

function saveData(){
localStorage.setItem("students", JSON.stringify(students));
}

function render(){

let list = document.getElementById("studentList");
list.innerHTML = "";

let presentCount = 0;

students.forEach((s, index)=>{

if(s.status === "Present") presentCount++;

let row = `
<tr>
<td>${s.name}</td>
<td class="${s.status === 'Present' ? 'present' : 'absent'}">
${s.status}
</td>
<td>
<button onclick="mark(${index}, 'Present')">P</button>
<button onclick="mark(${index}, 'Absent')">A</button>
<button onclick="removeStudent(${index})">❌</button>
</td>
</tr>
`;

list.innerHTML += row;

});

document.getElementById("total").innerText = "Total: " + students.length;
document.getElementById("present").innerText = "Present: " + presentCount;
document.getElementById("absent").innerText = "Absent: " + (students.length - presentCount);

}

function addStudent(){

let input = document.getElementById("studentName");

if(input.value === ""){
alert("Enter name");
return;
}

students.push({ name: input.value, status: "Absent" });

input.value = "";

saveData();
render();
}

function mark(index, status){
students[index].status = status;
saveData();
render();
}

function removeStudent(index){
students.splice(index,1);
saveData();
render();
}

function resetData(){
if(confirm("Clear all data?")){
students = [];
saveData();
render();
}
}

render();