// Déclaration des différents const
// Une const est une constante, avec une valeur non changeable et réutilisable dans le code
// document.querySelector, retourne le premier element contenue dans la classe
const addBtn = document.querySelector('#btn');
const taskCard = document.querySelector('.todoCard');
const tasksContainer = document.querySelector('#todoCards');

// Fonction pour ajouter une tâche
function addTask() {
    //Proprieté qui clone l'element contenue dans la constante "taskCard"
    const newTask = taskCard.cloneNode(true);
    const newTextArea = newTask.querySelector('.task');
    const newDelBtn = newTask.querySelector('.delBtn'); // Changer ici pour .delBtn

    tasksContainer.appendChild(newTask);
    newTextArea.value = "New Task";
    
    if (newDelBtn) {
        newDelBtn.addEventListener('click', function() {
            deleteTask(newTask);//suppresion de task
        });
    }

    updateCount();//met à jour le count
}

// Fonction pour supprimer une tâche
function deleteTask(task) {
    task.remove(); // Retire la tâche
    updateCount(); //met à jour le count
}

// Fonction pour mettre à jour le compteur 
function updateCount() {
    const count = tasksContainer.getElementsByClassName('todoCard').length;
    document.getElementById('compteurCard').textContent = `Number of cards=${count}`;// Récupération des elements contenue dans l'id 'compteurCard' et on affiche avec 
                                                                                        //le texte avec la valeur contenue dans le count ${count}
}

// Ajouter l'événement click pour le bouton d'ajout
if (addBtn) {
    addBtn.addEventListener('click', addTask);
}

// Mise à jour du count
updateCount();
