const taskCard = document.querySelector(".todoCard");
const tasksContainer = document.querySelector("#todoCards");// add a task on click

const addBtn = document.querySelector('#btn');
addBtn.addEventListener('click', addTask);// add a task on click

const delBtn = document.querySelector('.delBtn');
delBtn.addEventListener('click', function() {// delete default task on click
    deleteTask(taskCard); // target the right task
});


function addTask() {
    const newTask = taskCard.cloneNode(true)// clone the task card
    const newDelBtn = newTask.querySelector('.delBtn')
    const newTextArea = newTask.querySelector('.task')

    newTextAres.value = "New Task"// set new task text to "New Task"
    newDelBtn.addEventListener('click', function(){ // add delete event listener to new task
        deleteTask(newTask); // target the new task
    });

    tasksContainer.appendChild(newTask)// apprend new task to the tasks container
    updateCount();
}



function deleteTask(task){
    task.remove(); // remove the task
}
