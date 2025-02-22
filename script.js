const addBoxButton = document.getElementById('add-box-btn');  // Get the add box button
const addBoxContainer = document.getElementById('add-box');   // Container where form will be created
const boxContainer = document.getElementById('task-boxs');    // Container where task boxes will be appended

let taskNumber = 0;

// Open form inside the add-box container
addBoxButton.addEventListener('click', () => {
  // Check if form already exists to prevent duplicates
  if (document.getElementById("task-box-form")) return;

  const form = document.createElement('form');
  form.id = "task-box-form";

  form.innerHTML = `
      <input type="text" placeholder="Enter Task-Box Name..." id="task-box-name" />   
      <button type="submit" id="create-task-box">Add Task-Box</button>
  `;

  addBoxContainer.appendChild(form);
  const addBoxButtonParent = addBoxButton.parentNode;
  addBoxButton.remove();  // R

  // Handle form submission
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    createTaskBox();
    addBoxContainer.appendChild(addBoxButton);
  });
});

// Creating a task box
const createTaskBox = () => {
  const taskBoxName = document.getElementById("task-box-name").value.trim();

  if (!taskBoxName) {
    alert("Please enter a Task-Box name!");
    return;
  }

  const newBox = document.createElement('div');
  newBox.classList.add('box');
  


  newBox.innerHTML = `
    <p>${taskBoxName}:</p>
    <form>
      <input type="text" placeholder="Task Name" class="task-name" />
      <button type="button" class="add-task">+ Add Task</button>
    </form>
    <div class="task-list"></div>
  `;

  boxContainer.appendChild(newBox);

  // Event listener for adding tasks to the new task box
  newBox.querySelector('.add-task').addEventListener('click', (event) => {
    event.preventDefault();
    taskNumber++;
    createTask(newBox);
  });

  // Remove the form after adding the task box
  const formContainer = document.getElementById("task-box-form");
  formContainer.remove();
};

// Creating a task
const createTask = (box) => {
  const taskInput = box.querySelector(".task-name");
  const taskName = taskInput.value.trim();

  if (!taskName) {
    alert("Please enter a Task name!");
    return;
  }

  const task = document.createElement('div');
  task.classList.add('task');
  task.innerHTML = `<p>${taskNumber}. ${taskName}</p>`;

  box.querySelector('.task-list').appendChild(task);
  taskInput.value = ""; 
};
