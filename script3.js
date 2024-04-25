    // en array uten innhold "[]"
    const todoTask = [];
    //starten på heile koden 
    function addtodoTask(){
    // nettsiden ikkje restarter når knappen er trykket på
    event.preventDefault();
   
    //henter innhold fra "input boble"
    const taskInput = document.querySelector("#taskInput").value;
   
   
    //fra input til array
    todoTask.push(taskInput);
    
    // henter info fra "input bobla" og sender den som log i "console"
    console.log(todoTask);


   
    // forloop that loops our Array
 // loops trough our array and checks for new data

 //sjekker om array har fått verdi
 for(
    let index = 0;
    index < todoTask.length;
    index = index + 1 

){
   
 //henta informasjon fra loop ved hjelp av index
    const newTodoTask = todoTask[index]

   
    
    //laga ett nytt element i html
    const newlistItam = document.createElement("li")
    console.log(newlistItam);
    // der går og skjekker om verdi fra todotask 
    newlistItam.textContent = todoTask;
    

    //henter div elementet i ul 
    const taskListcontainer = document.querySelector("#taskList");
    console.log(taskListcontainer);

    //her legger vi til modifisering(css)
    newlistItam.classList.add("newlistItam");

    // å lage en knapp som sletter gjøremålet 
    const deleteButton = document.createElement("button")
    console.log(deleteButton);

    deleteButton.textContent = "delete todo"
    deleteButton.classList.add("deleteButton");
    deleteButton.addEventListener("click",function () {
       
        console.log("click?") ; 

        newlistItam.remove();
        deleteButton.remove();
    }) // her avslutter delete knappen

    //dette sendes tilbake til HTML :
    taskListcontainer.appendChild(deleteButton);
    taskListcontainer.appendChild(newlistItam);

}
}

const taskButton = document.querySelector("#taskButton");
console.log(taskButton);

taskButton.addEventListener("click",addtodoTask);






