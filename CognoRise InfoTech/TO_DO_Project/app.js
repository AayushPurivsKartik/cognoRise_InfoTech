document.addEventListener("DOMContentLoaded", function() {
    loadTasks();
});

function loadTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(function(task, index) {
        const li = document.createElement('li');
        li.innerHTML = task;
        li.innerHTML += `<span class="edit" onclick="editTask(${index})">&#9998;</span>`;
        li.innerHTML += `<span class="delete" onclick="deleteTask(${index})">&#10008;</span>`;
        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();

    if (task !== '') {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskInput.value = '';
        loadTasks();
    }
}

function editTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const editedTask = prompt("Edit Task:", tasks[index]);

    if (editedTask !== null) {
        tasks[index] = editedTask.trim();
        localStorage.setItem('tasks', JSON.stringify(tasks));
        loadTasks();
    }
}

function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
}
