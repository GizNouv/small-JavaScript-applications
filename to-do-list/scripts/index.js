const tasks = JSON.parse(localStorage.getItem('task')) || [];
const inputBox = document.querySelector('.input-box')
const ulElement = document.querySelector('.tasks')
const taskText = document.querySelector('.task-text');
createElement();

let inputValue;

inputBox.addEventListener('change' , (e) => {
    inputValue = e.target.value
})

function addTask() {
  if (inputBox.value.trim() === '') {
    alert('type something...')
  } else {
    tasks.push({
      task : inputValue,
      isDone : false
    });
    createElement();
    inputBox.value = '';
    doneChecker ()
    localStorage.setItem('task', JSON.stringify(tasks));
  }
  }
  
  function removeTask(index) {
    tasks.splice(index, 1);
    console.log(`after remove: ${tasks}`);
    createElement();
    localStorage.setItem('task', JSON.stringify(tasks));
  }

  function doneChecker () {
    tasks.forEach((item , index) => {
      const taskText = document.querySelector(`.task-${index}`);
      if (item.isDone === true) {
        taskText.classList.replace('unchecked' , 'done')
      } 
      else if (item.isDone === false) {
        taskText.classList.replace('done' , 'unchecked')
      }
    })
  }

  function changeClassName (index) {
    const taskText = document.querySelector(`.task-${index}`);
    if (taskText) {
     if (!tasks[index].isDone) {
      tasks[index].isDone = true
      
     }
     else {
      tasks[index].isDone = false
      
     }
     localStorage.setItem('task' , JSON.stringify(tasks))
    }
    doneChecker ()
  }

  doneChecker ()

  function createElement() {
    let taskCard = '';
  
    tasks.forEach((item, index) => {
      taskCard += 
      `
      <li class="task-card">
          <div class="task-text task-${index} unchecked" onclick="changeClassName(${index})">
              <p>${item.task}</p>
          </div>
          <span onclick="removeTask(${index})" class="x-sign">x</span>
      </li>
      `;
    });
  
    ulElement.innerHTML = taskCard;
  }


     




