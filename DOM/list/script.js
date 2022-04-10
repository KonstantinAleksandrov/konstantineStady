const tableList = [
  {id: 1, name: "Осип Мандельштам", date: "2022-04-10", row: 8, place: 1},
  {id: 2, name: "Оптитмус Прайм", date: "2022-04-11", row: 8, place: 2},
  {id: 3, name: "Настя", date: "2022-04-12", row: 5, place: 4},
]

const checkList = []

const renderTable = (list) => {
  const tableBody = document.querySelector('table > tbody')
  tableBody.innerHTML = ''

  list.forEach((row) => {
    const tr = document.createElement('tr')
    Object.keys(row).forEach((cell) => {
      const td = document.createElement('td')
      td.innerText = row[cell]
      tr.append(td)
    })

    const td = document.createElement('td')
    const checker = document.createElement('input')
    checker.type = 'checkbox'
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






const btn = document.querySelector('.form > button')
btn.addEventListener('click', () => handleAddRow(tableList))

const searchField = document.querySelector("input.edit")
searchField.addEventListener("input", (event) => handleSearchByName(event.target.value, tableList))

document.addEventListener('DOMContentLoaded', () => renderTable(tableList))