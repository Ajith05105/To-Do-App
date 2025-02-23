const addBoxButton = document.getElementById('add-box-btn');  // Get the add box button
const addBoxContainer = document.getElementById('add-box-bg-layout');   // Container where form will be created
const boxContainer = document.getElementById('task-boxs');    // Container where task boxes will be appended


// Open form inside the add-box container
addBoxButton.addEventListener('click', () => {

  // Check if form already exists to prevent duplicates
  if (document.getElementById("task-box-form")) return;

  // Creat form element and append it to the add-box container
  const form = document.createElement('form');
  form.id = "task-box-form";
  form.innerHTML = `
      <input type="text" placeholder="Enter Task-Box Name..." id="task-box-name" />   
      <div>
      <button type="submit" id ="create-task-box">Add Task-Box</button>
      <button type = "button" id ="cancel-add-box">Cancel</button>
      </div>
  `;

  addBoxContainer.appendChild(form);

  //temporarily hide the add box button
  addBoxButton.style.display = 'none';

  // Handle form submission
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission of refreshing the page
    createTaskBox(); // Create a task box with the title inputted
  });

  // Handle cancel button
   document.getElementById('cancel-add-box').addEventListener('click', (event) => {
    event.preventDefault();
    addBoxButton.style.display = 'block'; // Show the add box button again
    form.remove(); // Remove the form
  });

});


// Creating a task box
const createTaskBox = () => {
  // getting the users inputted task box name
  const taskBoxName = document.getElementById("task-box-name").value.trim();

  //check if the user has entered a task box name
  if (!taskBoxName) {
    alert("Please enter a Task-Box name!");
    return;
  }

  // creating the box list
  const newBox = document.createElement('div');
  newBox.classList.add('box');
  newBox.innerHTML = `
    <p>${taskBoxName}:</p>
    <div class="task-list"></div>
    <form class="task-form">
      <input type="text" placeholder="Task Name" class="task-name" />
      <button type="button" class="add-task">+ Add Task</button>
    </form>
  `;
  // adding it to the task box container
  boxContainer.appendChild(newBox);


  // Prevent form submission inside the task box form
  newBox.querySelector('.task-form').addEventListener('submit', (event) => {
    event.preventDefault();
  });

  // Event listener for adding tasks to the new task box
  newBox.querySelector('.add-task').addEventListener('click', (event) => {
    event.preventDefault();
    createTask(newBox);
  });

  // Remove the form after adding the task box
  const formContainer = document.getElementById("task-box-form");
  formContainer.remove();

  addBoxButton.style.display = 'block'; // Show the add box button again
};


// Creating a task
const createTask = (box) => {
  // Get the task input field and value
  const taskInput = box.querySelector(".task-name");
  const taskName = taskInput.value.trim();

  // Check if the user has entered a task name
  if (!taskName) {
    alert("Please enter a Task name!");
    return;
  }

  // Create a task element and append it to the task list
  const task = document.createElement('div');
  task.classList.add('task');
  task.innerHTML = `<div id = "task"><li>${taskName}</li><button id = "delete-task" >X</button></div>`;

  // Event listener for deleting a task
  task.querySelector('#delete-task').addEventListener('click', () => {
    task.remove();
  });

  // Append the task to the task list and clear the input field
  box.querySelector('.task-list').appendChild(task);
  taskInput.value = "";
};
