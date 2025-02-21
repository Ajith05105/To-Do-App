const addBoxButton = document.getElementById('add-box');
const boxContainer = document.getElementById('task-boxs');
const addTask = document.getElementById('task-boxs');

boxContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('add-task')) {
    const taskList = event.target.previousElementSibling; 
    const newTask = document.createElement('li');
    newTask.textContent = `Task ${taskList.children.length + 1}`;
    taskList.appendChild(newTask);
  }
});


addBoxButton.addEventListener('click', () => {
  const newBox = document.createElement('div'); 
  newBox.classList.add('box'); 

  newBox.innerHTML = `
    <p>Tasks:</p>
    <ul class="task-list"> 
      <li>Task 1</li>
      <li>Task 2</li>
      <li>Task 3</li>
    </ul>
    <button class="add-task">+ Add Task</button>
  `;

  boxContainer.appendChild(newBox);
});
