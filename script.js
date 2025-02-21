const addBoxButton = document.getElementById('add-box');
const boxContainer = document.getElementById('task-boxs');
const addTask = document.getElementById('task-boxs');

addBoxButton.addEventListener('click', () => {
  const newBox = document.createElement('div'); 
  newBox.classList.add('box'); 

  newBox.innerHTML = `
    <form id="task-box-form">
      <input type="text" placeholder="Task-Box Name" id="task-box-name" />
      <button type="submit" id="create-task-box">Add Task-Box</button>
    </form>
  `;

  boxContainer.appendChild(newBox);

  
  newBox.querySelector('#create-task-box').addEventListener('click', (event) => {
    event.preventDefault();
    createTask(event.target.closest('.box'));
  });
});

const createTask = (box) => {
  const taskBoxName = document.getElementById("task-box-name").value.trim();
  
 
  if (!taskBoxName) {
    alert("Please enter a Task-Box name!");
    return;
  }

 

  box.innerHTML = `
    <p>${taskBoxName}:</p>
    <ul class="task-list"> 
      <li>Task 1</li>
      <li>Task 2</li>
      <li>Task 3</li>
    </ul>
    <button class="add-task">+ Add Task</button>
  `;

};