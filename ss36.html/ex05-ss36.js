document.addEventListener('DOMContentLoaded', function () {
    let taskInput = document.getElementById('taskName');
    let addButton = document.querySelector('.task-input button');
    let pendingTasks = document.getElementById('pendingTasks');
    let inProgressTasks = document.getElementById('inProgressTasks');
    let doneTasks = document.getElementById('doneTasks');

    function loadTasks() {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        pendingTasks.innerHTML = '';
        inProgressTasks.innerHTML = '';
        doneTasks.innerHTML = '';
        tasks.forEach(task => {
            addTaskToBoard(task.name, task.status);
        });
    }
    function saveTasks() {
        let tasks = [];
        document.querySelectorAll('.task').forEach(task => {
            tasks.push({
                name: task.querySelector('p').innerText,
                status: task.parentElement.id
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    function addTaskToBoard(name, status = 'pendingTasks') {
        let taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.innerHTML = `<p>${name}</p>`;
        if (status !== 'doneTasks') {
            let button = document.createElement('button');
            button.innerText = 'Chuyển tiếp';
            button.addEventListener('click', function () {
                if (taskDiv.parentElement.id === 'pendingTasks') {
                    inProgressTasks.appendChild(taskDiv);
                } else if (taskDiv.parentElement.id === 'inProgressTasks') {
                    doneTasks.appendChild(taskDiv);
                    button.remove();
                }
                saveTasks();
            });
            taskDiv.appendChild(button);
        }
        document.getElementById(status).appendChild(taskDiv);
        saveTasks();
    }
    addButton.addEventListener('click', function () {
        let taskName = taskInput.value.trim();
        if (taskName) {
            addTaskToBoard(taskName);
            taskInput.value = '';
        }
    });

    loadTasks();
});
