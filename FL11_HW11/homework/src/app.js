let rootNode = document.getElementById('root');
let inputAaction = document.getElementsByClassName('inputaction')[0];
let addButton = document.getElementsByClassName('addbutton')[0];
let messageBar = document.getElementsByClassName('messagebar')[0];
let conteinerTasks = document.getElementsByClassName('conteinertasks')[0];
let countTasks = 10;

inputAaction.addEventListener('input', verifyInput);
addButton.addEventListener('click', addElement);

function verifyInput(event) {
    addButton.disabled = event.target.value === '';
    }

function addElement() {
    let task = document.createElement('div');
    let checkbox = document.createElement('div');
    let taskTitle = document.createElement('div');
    let taskDelite = document.createElement('div');
    let input = document.createElement('input');
    let pDisable = document.createElement('p');
    let editIcon = document.createElement('i');
    let saveIcon = document.createElement('button');
    let doneIcon = document.createElement('i');
    let deleteButton = document.createElement('button');
    let deleteIcon = document.createElement('i');

    task.className = 'task';
    checkbox.className = 'checkbox';
    taskTitle.className = 'tasktitle';
    taskDelite.className = 'taskdelite';
    pDisable.className = 'disable';
    input.className = 'editinput nonevisible';
    editIcon.className = 'materialicons editicon';
    saveIcon.className = 'materialicons saveicon nonevisible';
    doneIcon.className = 'materialicons doneicon nonevisible';
    deleteIcon.className = 'materialicons';
    doneIcon.innerText = 'done';
    editIcon.innerText = 'edit';
    saveIcon.innerText = 'save';
    deleteIcon.innerText = 'delete';
    input.value = inputAaction.value;
    pDisable.innerText = inputAaction.value;
    deleteButton.className = 'deleteicon';
    deleteButton.appendChild(deleteIcon);

    editIcon.addEventListener('click', editTask);
    saveIcon.addEventListener('click', saveEditText);
    input.addEventListener('input', disableSave);
    deleteButton.addEventListener('click', deleteTask);
    checkbox.addEventListener('click', addDone);
    addButton.addEventListener('click', disableAdd)

    checkbox.appendChild(doneIcon);
    taskTitle.appendChild(pDisable);
    taskTitle.appendChild(input);
    taskTitle.appendChild(editIcon);
    taskTitle.appendChild(saveIcon);
    taskDelite.appendChild(deleteButton);

    task.appendChild(checkbox);
    task.appendChild(taskTitle);
    task.appendChild(taskDelite);

    if (inputAaction.value !== '' && conteinerTasks.childElementCount < countTasks) {
        conteinerTasks.appendChild(task);
        inputAaction.value = '';
    }

    function editTask() {
        input.classList.toggle('nonevisible');
        saveIcon.classList.toggle('nonevisible');
        doneIcon.classList.toggle('nonevisible');
        pDisable.style.display = 'none';
        checkbox.style.display = 'none';
        editIcon.style.display = 'none';
    }

    function saveEditText() {
        pDisable.style.display = 'block';
        checkbox.style.display = 'block';
        editIcon.style.display = 'block';
        input.classList.toggle('nonevisible');
        saveIcon.classList.toggle('nonevisible');
        doneIcon.classList.toggle('nonevisible');
        pDisable.innerText = input.value;
    }

    function disableSave(event) {
        if (event.target.value === '') {
            saveIcon.disabled = true;
            saveIcon.style.color = 'grey';
        } else {
            saveIcon.disabled = false;
            saveIcon.style.color = 'rgb(52, 187, 250)';
        }
    }

    function tasksState() {
        if (conteinerTasks.childElementCount >= countTasks) {
            inputAaction.disabled = true;
            addButton.disabled = true;
            messageBar.style.display = 'block';

        } else {
            inputAaction.disabled = false;
            addButton.disabled = false;
            messageBar.style.display = 'none';
        }
    }

    function deleteTask() {
            task.remove();
            tasksState();
    }

    function addDone() {
        doneIcon.style.display = 'block';
    }

    function disableAdd() {
        tasksState();
    }
}
