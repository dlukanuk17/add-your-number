const form = document.querySelector('.form')
const taskInput = document.querySelector('.task-input')
const taskList = document.querySelector('.task-list')
const emptyList = document.querySelector('.empty-list')
const taskInput1 = document.querySelector('.task-input1')
const taskInput2 = document.querySelector('.task-input2')
const addTask = e => {
	e.preventDefault()
	const Inputname = taskInput.value
	const Inputsurname = taskInput1.value
	const Inputphone = taskInput2.value
	const taskHTMl = `
    <li class="list-group-item">
        <p class='name p'>${Inputname}</p> 
        <p class='surname p'>${Inputsurname}</p>
        <p class='phone p'>${Inputphone}</p>
    <div class="button">
      <button type='button' class='btn-action' data-action='delete'>Delete
      </button>
    </div>
    </li>
  `
  taskList.insertAdjacentHTML('beforeend', taskHTMl)
  	taskInput.value = ''
	taskInput1.value = ''
	taskInput2.value = ''
  if (taskList.children.length > 0) emptyList.classList.add('none')
}
const deleteTask = e => {
	if (e.target.dataset.action === 'delete') {
		const parentNode = e.target.closest('.list-group-item')
		parentNode.remove()
	}
	if (taskList.children.length == 3) emptyList.classList.remove('none')
}

form.addEventListener('submit', addTask)
taskList.addEventListener('click', deleteTask)
