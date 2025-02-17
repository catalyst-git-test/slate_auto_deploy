function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    
    if (taskText === '') return;
    
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    
    li.innerHTML = `
        <span onclick="toggleComplete(this)">${taskText}</span>
        <button onclick="deleteTask(this)">Delete</button>
    `;
    
    taskList.appendChild(li);
    input.value = '';
}

function toggleComplete(element) {
    element.classList.toggle('completed');
}

function deleteTask(button) {
    button.parentElement.remove();
}

// Add task when Enter key is pressed
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});