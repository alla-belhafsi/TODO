// Sélectionne l'élément de modèle initial de la task
const taskCard = document.querySelector(".todoCard");
// Sélectionne le conteneur des tasks
const tasksContainer = document.querySelector(".todoCards");

// Sélectionne le bouton "Add a task"
const addBtn = document.querySelector('#btn');
// Ajout d'un gestionnaire d'événement de clic
addBtn.addEventListener('click', addTask);// 

// Sélectionne le bouton de suppression "delBtn"
const delBtn = document.querySelector('.delBtn');
// Ajout d'un gestionnaire d'événement de clic
delBtn.addEventListener('click', function() {
    // Supprime le modèle initial
    deleteTask(taskCard); 
});

// Fonction pour créer une nouvelle task en clonant le modèle initial
function createTask() {
    const newTask = taskCard.cloneNode(true);
    return newTask;
}

// Initialise un compteur de tasks
let taskCount = 0; 

// Fonction pour ajouter une nouvelle task
function addTask() {
    // Afficher le compteur à la suite de chaque "New text" ajouter
    const taskCount =(tasksContainer.querySelectorAll('.todoCard').length) + 1;

    // Crée une nouvelle task en clonant le modèle initial
    const newTask = createTask();

    // Sélectionne les éléments de la nouvelle task
    const newDelBtn = newTask.querySelector('.delBtn');
    const newTextArea = newTask.querySelector('.task');

    // Définir le texte de la nouvelle tâche sur "New Task 'n'"
    newTextArea.value ="New Task " + taskCount;
    
    // Ajout d'un gestionnaire d'événement de clic pour la suppression de la task
    newDelBtn.addEventListener('click', function(){
        // Supprime la task 
        deleteTask(newTask); 
    });

    // Ajoute la nouvelle task au conteneur des tasks
    tasksContainer.appendChild(newTask);

    // Mettre à jour le compteur du nombre de tasks
    updateCount();
}

// Fonction pour supprimer un task
function deleteTask(task){
    task.remove(); 

    // Mettre à jour le compteur du nombre de tasks
    updateCount();
}

// Fonction pour mettre à jour le compteur du nombre de tasks
function updateCount() {
    // Le compteur
    const taskCount = tasksContainer.querySelectorAll('.todoCard').length;
    const countElement = document.querySelector("#count");
    countElement.textContent = taskCount + " task" + (taskCount !== 1 ? "s" : "");

    // Sélectionne le bouton par son id
    const addTaskButton = document.querySelector('#btn');

    // Modifie le texte du bouton en fonction du nombre de tasks
    if (taskCount === 0) { 
        addTaskButton.textContent = "Create task";
    } else {
        addTaskButton.textContent = "Add task";

        // Ajout de padding horizontal en fonction du nombre de tasks
        const paddingValue =  taskCount * 55.4 + "px"; // Ajustement de la valeur
        addTaskButton.style.paddingLeft = paddingValue;
        addTaskButton.style.paddingRight = paddingValue;
    }
}