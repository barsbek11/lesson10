let DOM = {
  blockTask: document.querySelector('.task'),
}

let arrTask = []

const inpValue = () => {
  DOM.blockTask.innerHTML = ''

  let inp = document.querySelector('.inp').value

  let obj = {
    task: inp,
    bool: false,
  }

  arrTask.push(obj)
  document.querySelector('.inp').value = ''
  localStorage.setItem('todo', JSON.stringify(arrTask))
  getTask()
}

const getTask = () => {
  arrTask.map((item, index) => createTask(item, index))
}

const createTask = (info, index) => {
  let tagP = document.createElement('p')
  let tagBtn = document.createElement('button')
  tagBtn.innerText = 'delete'

  tagBtn.onclick = () => deleteTask(index)

  tagP.innerText = info.task

  tagP.style.display = 'flex'
  tagP.style.justifyContent = 'space-between'
  DOM.blockTask.innerHTML = ''
  let arr = arrTask.filter((x, y) => y !== index)
  arrTask = arr
  getTask()
  localStorage.setItem('todo', JSON.stringify(arrTask))
}

const getLocal = () => {
  if (
    localStorage.getItem('todo') !== null &&
    localStorage.getItem('todo') !== undefined
  ) {
    arrTask = JSON.parse(localStorage.getItem('todo'))
    getTask()
  }
}
getLocal()

const allDelete = () => {
  arrTask = []
  DOM.blockTask.innerHTML = ''
  localStorage.setItem('todo', JSON.stringify(arrTask))
}