const addBoxButton = document.getElementById('add-box');
const boxContainer = document.getElementById('task-boxs');
addBoxButton.addEventListener('click', () => {
  alert('Button clicked');
  boxContainer.innerHTML += ` <div class = "box">Tasks: 
            <li>Task 1</li>
            <li>Task 2</li>
            <li>Task 3</li>
            <button id = "add-task">+ Add Task</button>
        </div>`;
});