

const input = document.getElementById("taskInput");
const list = document.getElementById("list");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function save () {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function render (filter = "all") {
    list.innerHTML="";
    tasks.forEach((task, index)=> {
        
     if ( 
        filter === "active" && task.done || 
        filter === " done " && !task.done
        
     ) return;

     const li = document.createElement("li");
     if (task.done) li.classList.add("done");
     
li.innerHTML = `
        <span onclick="toggle(${index})">${task.text}</span>
        <button onclick="removeTask(${index})">❌</button>
      `;
list.appendChild(li);
    });
}

function addTask() {

    if (!input.value.trim()) return;

    tasks.push({text: input.value, done:false});
    input.value = "";
    save();
    render();

} 

function removeTask (i) {
    tasks.splice(i,1);
    save();
    render();
}

function toggle(i) {
    tasks[i].done = !tasks[i].done;
save();
render();

}

function filterTasks(type) {
    render(type);

}

document.getElementById("addBtn").onclick = addTask;
input.addEventListener("keydown" , e =>{
    if (e.key === "Enter") addTask();
});

render();





































/*function addTask() {
  const input = document.getElementById( "TaskInput");
    const  text = input.value.trim();

    if (text === "") return;

    const li = document.createElement("li");

    li.innerHTML = `
     <span  onclick="toggleTask(this)">${text}</span>
      <button onclick="removeTask(this)">❌</button>  `;
      
    
      document.getElementById("taskList").appendChild(li.) ; input.value ="";

      function removeTask(btn){
        btn.parentElement.remove();
      }

function toggleTask (span) {
    span.parentElement.classList.toggle("done")
}

*/


