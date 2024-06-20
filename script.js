document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const newTaskInput = document.getElementById('new-task');
        const taskText = newTaskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            newTaskInput.value = '';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="complete">Complete</button>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    }

    taskList.addEventListener('click', function (e) {
        if (e.target.classList.contains('complete')) {
            e.target.parentElement.parentElement.classList.toggle('completed');
        } else if (e.target.classList.contains('delete')) {
            e.target.parentElement.parentElement.remove();
        } else if (e.target.classList.contains('edit')) {
            const taskItem = e.target.parentElement.parentElement;
            const taskText = taskItem.querySelector('span').textContent;
            const newTaskText = prompt('Edit your task', taskText);
            if (newTaskText !== null) {
                taskItem.querySelector('span').textContent = newTaskText.trim();
            }
        }
    });
});

