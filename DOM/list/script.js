const tableList = [
  {id: 1, name: "Осип Мандельштам", date: "2022-04-10", row: 8, place: 2},
  {id: 2, name: "Оптитмус Прайм", date: "2022-04-11", row: 9, place: 3},
  {id: 3, name: "Рыба", date: "2022-04-12", row: 5, place: 1},
  {id: 4, name: "Мерри Джейн", date: "2022-04-12", row: 3, place: 7},
]

let checkList = null

const renderTable = (list) => {
  const tableBody = document.querySelector('table > tbody')
  tableBody.innerHTML = ''

  list.forEach((row) => {
    const tr = document.createElement('tr')
    Object.values(row).forEach((cell) => {
      const td = document.createElement('td')
      td.innerText = cell
      tr.append(td)
    })

    const td = document.createElement('td')
    const checker = document.createElement('input')
    checker.type = 'checkbox'
    checker.dataset.id = row.id
    checker.addEventListener('change', (e) => handleCheck(row.id, e.target))

    td.append(checker)
    tr.append(td)

    tableBody.append(tr)
    tr.addEventListener('click',function(event){
      const isPrevTrActive = tr.classList.contains('_active')
      document.querySelectorAll('tr').forEach(item => {
        item.classList.remove('_active')
        item.querySelector('input') ? item.querySelector('input').checked = false : () => false
        checkList = null
      })
      
      if(!isPrevTrActive){
        tr.classList.add('_active')
        tr.querySelector('input').checked = true
        checkList = row.id
      } else {
        checkList = null
      }

      //?????????????????????????????????????????????????????????????????
    })
  })
}

const handleAddRow = (list) => {
  const formInputs = document.querySelectorAll('.form > input')
  const rowObject = {}
  const tempId = createAndSortIdArr(list)
  rowObject.id = tempId[tempId.length - 1] + 1

  formInputs.forEach((input) => {
    rowObject[input.name] = input.value
  })
  list.push(rowObject)
  renderTable(list)
}

const handleSearchByName = (search, list) => {
  const filteredList = list.filter(f => f.name.includes(search))
  renderTable(filteredList)
}

const tableSort = (list, item, direction) =>{
   list.sort((a,b) => {
    if(a[item] > b[item]){
      return 1 * direction
    }
    if(a[item] < b[item]){
      return -1 * direction
    }
    if(a[item] === b[item]){
      return 0
    }
  })
}

const createAndSortIdArr = (arr) =>{
  let a = []
  for(let i = 0;i < arr.length;i++){
    a.push(arr[i].id)
  }
  for(let i = 0,endI = a.length - 1; i < endI; i++){
      
    for(let j = 0,endJ = endI - i; j < endJ; j++){
        if(a[j] > a[j + 1]){
            let temp = a[j]
            a[j] = a[j + 1]
            a[j + 1] = temp
        } 
    }


  }
 return a
}

const tableColumnNames = document.querySelectorAll('.table thead th')
tableColumnNames.forEach((th) => th.addEventListener('click', (e) => {


  if(e.target.dataset.sort === "down") {
    e.target.dataset.sort = 'up'
    tableSort(tableList, e.target.dataset.field, -1)
    renderTable(tableList)
    e.target.classList.remove('down')
    return
  }

  const del = document.querySelectorAll('th[data-sort=down]')
  del.forEach((item)=>{
    item.dataset.sort = 'up'
    item.classList = ''
  })
  if(e.target.dataset.sort === 'up'){ 
    e.target.dataset.sort = 'down'
    tableSort(tableList, e.target.dataset.field, 1)
    renderTable(tableList)
    e.target.classList.add('down')
  }  else {
    tableSort(tableList, e.target.dataset.field, -1)
    renderTable(tableList)
    e.target.dataset.sort = 'up'
    e.target.classList.remove('down')
  } 
}))


const handleCheck = (id, target) => {

  const checkboxList = document.querySelectorAll('input[type=checkbox]')
  const isChecked = target.checked

  checkboxList.forEach(checkbox => checkbox.checked = false)
  isChecked ? target.checked = true : target.checked = false
  if(isChecked){
    checkList = id
  }else{
    checkList = null
  }
}


const EditBtn = document.querySelector('.open-modal')
EditBtn.addEventListener('click', (e) => {
  const modalContent = document.querySelector('.modal-container .text')
  if(!checkList) {
    modalContent.textContent = 'Выберите посетителя'
  } else {
    modalContent.textContent = ""
    const clonedForm = document.querySelector('.form').cloneNode(true)
    const formData = tableList.find(f => f.id === checkList)
    const inputs = clonedForm.querySelectorAll('input')
    const saveButton = clonedForm.querySelector('button')
    inputs.forEach( input => input.value = formData[input.name])
    modalContent.append(clonedForm)

    saveButton.addEventListener('click', () => {
      const editedRow = {}
      editedRow.id = checkList
      inputs.forEach((input) => {
        editedRow[input.name] = input.value
      })
      tableList[checkList - 1] = editedRow
      renderTable(tableList)
    })

  }
})

const deleteChild = (num) => {
  if(checkList === null) {
    const modalContent = document.querySelector('.modal-container .text')
    modalContent.textContent = 'Выберите пользователя'
    const getModelWindow = document.querySelector('.modal-container')
    getModelWindow.style.display = 'flex'
  }else{
    const itemIndex = tableList.findIndex(f => f.id === num)
   tableList.splice(itemIndex,1)
   renderTable(tableList)
  }
}

const del = document.querySelector('.del')
del.addEventListener('click',() =>(deleteChild(checkList)))

const btn = document.querySelector('.form > button')
btn.addEventListener('click', () => handleAddRow(tableList))

const searchField = document.querySelector("input.edit")
searchField.addEventListener("input", (event) => handleSearchByName(event.target.value, tableList))

document.addEventListener('DOMContentLoaded', () => renderTable(tableList))


