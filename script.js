
// 
function addTodo(){
    
    event.preventDefault();
console.log("button clicked")
// const = er å erklære en verdi 
//taskinputdata er et variabelt navn
//  = å erklære en verdi som skal lagres
//  document referer til html.document
// queryselector() henter noe fra html
// #taskinput er id-navnet til element vi henter fra html
// .value er at vi henter verdi/innhold til element
// ; betyr full stopp av comando.
const taskInputData = document.querySelector("#taskInput").value;
console.log (taskInputData)
// const = erklæring (henter noe)
const newListItem = document.createElement("li");
console.log(newListItem)
// modifiserer manipulerer 
newListItem.textContent = taskInputData;
newListItem.classList.add("newlistItam");

const taskList = document.querySelector("#taskList");
console.log(taskList)


taskList.appendChild(newListItem);
}

const taskButton = document.querySelector("#taskButton");
console.log(taskButton)

taskButton.addEventListener("click",addTodo);

let menu = document.querySelector(".menu"),
    toggle = document.querySelector(".menu-toggle");

function toggleToggle() {
  toggle.classList.toggle("menu-open");
};

function toggleMenu() {
  menu.classList.toggle("active");
};

toggle.addEventListener("click", toggleToggle, false);
toggle.addEventListener("click", toggleMenu, false);





 