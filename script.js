const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => addTaskToDOM(task.text, task.done));
}

function saveTasks() {
  const tasks = [...document.querySelectorAll('#taskList li')].map(li => ({
    text: li.firstChild.textContent,
    done: li.classList.contains('done')
  }));
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTaskToDOM(text, done = false) {
  const li = document.createElement('li');
  li.textContent = text;
  if (done) li.classList.add('done');
  li.addEventListener('click', () => {
    li.classList.toggle('done');
    saveTasks();
  });
  taskList.appendChild(li);
  saveTasks();
}

addBtn.addEventListener('click', () => {
  if (taskInput.value.trim()) {
    addTaskToDOM(taskInput.value);
    taskInput.value = '';
  }
});

window.addEventListener('load', loadTasks);
