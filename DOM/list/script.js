const tableList = [
  {id: 1, name: "Осип Мандельштам", date: "2022-04-10", row: 8, place: 2},
  {id: 2, name: "Оптитмус Прайм", date: "2022-04-11", row: 9, place: 3},
  {id: 3, name: "Настя", date: "2022-04-12", row: 5, place: 1},
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
  })
}

const handleAddRow = (list) => {
  const formInputs = document.querySelectorAll('.form > input')
  const rowObject = {}
  rowObject.id = list.at(-1).id + 1

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


const tableColumnNames = document.querySelectorAll('.table thead th')
tableColumnNames.forEach((th) => th.addEventListener('click', (e) => {
  e.target.classList.toggle('down')
  // TODO очищать все классы down кроме target
  if(e.target.dataset.sort === 'up'){
    e.target.dataset.sort = 'down'
    tableSort(tableList, e.target.dataset.field, 1)
    renderTable(tableList)
  } else {
    tableSort(tableList, e.target.dataset.field, -1)
    renderTable(tableList)
    e.target.dataset.sort = 'up'
  }
}))

const handleCheck = (id, target) => {

  /***
   *
   * We have stopped here
   *
   */



// if(checkList.includes(id)) {
//   checkList = checkList.filter(f => f !== id)
// } else {
//   checkList.push(id)
// }

  const checkboxList = document.querySelectorAll('input[type=checkbox]')
  const isChecked = target.checked

  checkboxList.forEach(checkbox => checkbox.checked = false)
  isChecked ? target.checked = true : target.checked = false
  checkList ? checkList = null : checkList = id

  console.log(checkList)
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

const btn = document.querySelector('.form > button')
btn.addEventListener('click', () => handleAddRow(tableList))

const searchField = document.querySelector("input.edit")
searchField.addEventListener("input", (event) => handleSearchByName(event.target.value, tableList))

document.addEventListener('DOMContentLoaded', () => renderTable(tableList))




// const createAndAddNewChild = () =>{
//   const listForm = document.querySelectorAll('.form > input')
//   const tr = document.createElement('tr')
//   const table = document.querySelector('table')
//   const id = document.createElement('td')
//   const check = document.createElement('input')
//   const checkTd = document.createElement('td')
//
//   check.type = 'checkbox'
//   const allTr = table.querySelectorAll('tr')
//   if(+allTr[allTr.length - 1].querySelectorAll('td')[0].textContent){
//     id.textContent = +allTr[allTr.length - 1].querySelectorAll('td')[0].textContent + 1
//   }else id.textContent = 1
//
//
//
//   table.append(tr)
//   checkTd.append(check)
//   tr.prepend(id)
//   listForm.forEach((input)=>{
//     const td = document.createElement('td')
//     td.textContent = input.value
//     tr.append(td)
//   })
//   tr.append(checkTd)
// }

// const btn2 = document.querySelector('.form > button')
// btn2.addEventListener('click',createAndAddNewChild)
//
//
//  deleteTr = () =>{
//   allCheck = document.querySelectorAll('input[type = checkbox]')
//   allCheck.forEach((item) => {
//     if(item.checked){
//      item.closest('tr').remove()
//     }
//   })
// }
// const del = document.querySelector('.del');
// del.addEventListener('click',deleteTr)

// const createArr = () => {
//   const trList = document.querySelectorAll('tr')
//   const tableList = []
//   const firstTdList = trList[0].querySelectorAll('th')
//
//   const rows = document.querySelectorAll('tbody tr')
//   rows.forEach((row) => {
//     const rowObj = {}
//     row.querySelectorAll('td').forEach((cell, key) => {
//       firstTdList.forEach((field, fieldKey) => {
//         if(key === fieldKey) {
//           rowObj[field.dataset.field] = cell.textContent
//         }
//       })
//     })
//     tableList.push(rowObj)
//   })
//
//   console.log(tableList)
//
// }
//
// createArr()

