const addBoxButton = document.getElementById('add-box');
const boxContainer = document.getElementById('task-boxs');



addBoxButton.addEventListener('click', () => { //This is what happens when you wanna add the list
  const newBox = document.createElement('div'); 
  newBox.classList.add('box'); 

  // gets the name of the list and creates a list with the name
  newBox.innerHTML = `
    <form id="task-box-form">
      <input type="text" placeholder="Task-Box Name" id="task-box-name" />   
      <button type="submit" id="create-task-box">Add Task-Box</button>
    </form>
  `;

  boxContainer.appendChild(newBox);

  //had to prevent the default action of the form so that the page doesn't refresh so the create task box fucntion is reached 
  newBox.querySelector('#create-task-box').addEventListener('click', (event) => {
    event.preventDefault();
    createTaskBox(event.target.closest('.box'));
  });
});

//creating a task box
const createTaskBox = (box) => {
  const taskBoxName = document.getElementById("task-box-name").value.trim();
  
 
  if (!taskBoxName) {
    alert("Please enter a Task-Box name!");
    return;
  } 
//This is what happens after the task box is created
  box.innerHTML = `
    <p>${taskBoxName}:</p>
    <form>
    <input type="text" placeholder="Task Name" id="task-name" />
    <button class="add-task">+ Add Task</button>
    </form>
  `;

  box.querySelector('.add-task').addEventListener('click', (event) => {
    event.preventDefault();
    createTask(event.target.closest('.box'));
  });

};

