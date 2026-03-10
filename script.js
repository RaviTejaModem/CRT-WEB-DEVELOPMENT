
const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");
const modal = document.getElementById("taskModal");
const saveTask = document.getElementById("saveTask");
const closeModal = document.getElementById("closeModal");
const taskInput = document.getElementById("taskInput");


let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


function renderTasks(){

taskList.innerHTML="";

tasks.forEach((task,index)=>{

const li = document.createElement("li");

li.innerHTML=`
<span class="${task.completed ? 'completed':''}">
${task.text}
</span>

<div>

<button onclick="toggleTask(${index})">✔</button>

<button onclick="deleteTask(${index})">❌</button>

</div>
`;

taskList.appendChild(li);

});

}


function toggleTask(index){

tasks[index].completed = !tasks[index].completed;

saveLocal();

renderTasks();

}


function deleteTask(index){

tasks.splice(index,1);

saveLocal();

renderTasks();

}


function saveLocal(){

localStorage.setItem("tasks",JSON.stringify(tasks));

}


addBtn.onclick = () =>{
modal.style.display="flex";
};


closeModal.onclick = () =>{
modal.style.display="none";
};


saveTask.onclick = ()=>{

if(taskInput.value==="") return;

tasks.push({
text:taskInput.value,
completed:false
});

taskInput.value="";

modal.style.display="none";

saveLocal();

renderTasks();

};


renderTasks();


const date = new Date();

document.getElementById("date").innerText =
date.toLocaleDateString();