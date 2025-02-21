const addBoxButton = document.getElementById('add-box');
const boxContainer = document.getElementById('task-boxs');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', () => {
  alert('Button clicked');
  taskList.innerHTML += `<li>Task 4</li>`;
});

addBoxButton.addEventListener('click', () => {
  alert('Button clicked');
  boxContainer.innerHTML += ` <div class = "box">Tasks: 
              <span id = "task-list">
            <li>Task 1</li>
            <li>Task 2</li>
            <li>Task 3</li>
            </span>
            <button id = "add-task">+ Add Task</button>
        </div>`;
}); 