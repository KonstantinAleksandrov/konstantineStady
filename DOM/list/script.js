const tableList = [
  {id: 1, name: "Осип Мандельштам", date: "2022-04-10", row: 8, place: 1},
  {id: 2, name: "Оптитмус Прайм", date: "2022-04-11", row: 8, place: 2},
  {id: 3, name: "Настя", date: "2022-04-12", row: 5, place: 4},
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

const handleSort = (fieldName, list) => {

}


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
  inputs.forEach( input => input.value = formData[input.name])
  modalContent.append(clonedForm)
}
})

const btn = document.querySelector('.form > button')
btn.addEventListener('click', () => handleAddRow(tableList))

const searchField = document.querySelector("input.edit")
searchField.addEventListener("input", (event) => handleSearchByName(event.target.value, tableList))

document.addEventListener('DOMContentLoaded', () => renderTable(tableList))
