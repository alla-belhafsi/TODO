// Sélectionne l'élément de modèle initial de la tâche et le conteneur des tâches
const taskCard = document.querySelector(".todoCard");
const tasksContainer = document.querySelector(".todoCards");

// Sélectionne le bouton "Add a task" et ajoute un gestionnaire d'événement de clic
const addBtn = document.querySelector('#btn');
addBtn.addEventListener('click', addTask);// add a task on click

// Sélectionne le bouton de suppression (delBtn) faut ajuster ce sélecteur en fonction de la structure HTML
const delBtn = document.querySelector('.delBtn');
delBtn.addEventListener('click', function() {
    deleteTask(taskCard); // Supprime le modèle initial
});

// Fonction pour créer une nouvelle tâche en clonant le modèle initial
function createTask() {
    const newTask = taskCard.cloneNode(true);
    return newTask;
}

// Fonction pour ajouter une nouvelle tâche
function addTask() {
    // Crée une nouvelle tâche en clonant le modèle initial
    const newTask = createTask();

    // Sélectionne les éléments de la nouvelle tâche
    const newDelBtn = newTask.querySelector('.delBtn');
    const newTextArea = newTask.querySelector('.task');

    // Définir le texte de la nouvelle tâche sur "New Task"
    newTextArea.value = "New Task";
    
    // Ajoute un gestionnaire d'événement de clic pour la suppression de la tâche
    newDelBtn.addEventListener('click', function(){ 
        deleteTask(newTask); 
    });

    // Ajoute la nouvelle tâche au conteneur des tâches
    tasksContainer.appendChild(newTask);

    // Mettre à jour le compteur du nombre de tâches
    updateCount();
}

// Fonction pour supprimer une tâche
function deleteTask(task){
    task.remove(); 

    // Mettre à jour le compteur du nombre de tâches
    updateCount();
}

// Fonction pour mettre à jour le compteur du nombre de tâches
function updateCount() {
    // Exclure le modèle initial du comptage
    const taskCount = tasksContainer.querySelectorAll('.todoCard').length;
    const countElement = document.querySelector("#count");
    countElement.textContent = taskCount + " task" + (taskCount !== 1 ? "s" : "");
}