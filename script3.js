function addtodoTask(){
    event.preventDefault();
   
    // en array uten innhold "[]"
    const todoTask = [];
    
    //henter innhold fra "input boble"
    const taskInput =document.querySelector("#taskInput").value;
   
    // henter info fra "input bobla" og sender den som log i "console"
    todoTask.push(taskInput);
    console.log(todoTask);


   
    // loops trough our array and checks for new data
    for(
        index = 0;
        index < todoTask.length;
        index = index + 1 

    ){
       
 //henta informasjon fra loop ved hjelp av index
    const newTodoTask = todoTask[index]

    const taskButton = document.querySelector("#taskButton");
    console.log(taskButton);
    
    taskButton.addEventListener("click",addtodoTask);
    
    //laga ett nytt element i html
    const newlistItam = document.createElement("li")
    console.log(newlistItam);
    
    newlistItam.textContent = todoTask;
    

    }



}




