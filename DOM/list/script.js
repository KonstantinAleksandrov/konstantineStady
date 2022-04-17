const tableList = [
  {id: 1, name: "Осип Мандельштам", date: "2022-04-10", row: 8, place: 2},
  {id: 2, name: "Оптитмус Прайм", date: "2022-04-11", row: 9, place: 3},
  {id: 3, name: "Настя", date: "2022-04-12", row: 5, place: 1},
  {id: 4, name: "Мерри Джейн", date: "2022-04-12", row: 3, place: 7},
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

const tableSort = (list,item) =>{
   list.sort((a,b) => {
    if(a[item] > b[item]){
      return 1 
    }
    if(a[item] < b[item]){
      return -1
    }
    if(a[item] === b[item]){
      return 0
    }
  }) 
  
}



const table = document.querySelector('.table')
table.addEventListener('click',(event) => {
  if(event.target.tagName == 'TH'){
    switch(event.target.textContent){
      case 'id':
        tableSort(tableList,'id')
        renderTable(tableList)
        break;
      case 'Ряд':
        tableSort(tableList,'row')  
        renderTable(tableList)
        break;
      case 'Имя':
        tableSort(tableList,'name')  
        renderTable(tableList)
        break;
      case 'Дата':
        tableSort(tableList,'date')  
        renderTable(tableList)
        break;
      case 'Место':
        tableSort(tableList,'place')  
        renderTable(tableList)
        break;
    }
    
  }
})

const btn = document.querySelector('.form > button')
btn.addEventListener('click', () => handleAddRow(tableList))

const searchField = document.querySelector("input.edit")
searchField.addEventListener("input", (event) => handleSearchByName(event.target.value, tableList))

document.addEventListener('DOMContentLoaded', () => renderTable(tableList))



/* createAndAddNewChild = () =>{
  const listForm = document.querySelectorAll('.form > input')
  const tr = document.createElement('tr')
  const table = document.querySelector('table')
  const id = document.createElement('td')
  const check = document.createElement('input')
  const checkTd = document.createElement('td')

  check.type = 'checkbox'
  const allTr = table.querySelectorAll('tr')
  if(+allTr[allTr.length - 1].querySelectorAll('td')[0].textContent){
    id.textContent = +allTr[allTr.length - 1].querySelectorAll('td')[0].textContent + 1
  }else id.textContent = 1
  
  

  table.append(tr)
  checkTd.append(check)
  tr.prepend(id)
  listForm.forEach((input)=>{
    const td = document.createElement('td')
    td.textContent = input.value
    tr.append(td)
  })
  tr.append(checkTd)
}

const btn = document.querySelector('.form > button')
btn.addEventListener('click',createAndAddNewChild)


 deleteTr = () =>{
  allCheck = document.querySelectorAll('input[type = checkbox]')
  allCheck.forEach((item) =>{
    if(item.checked){
     item.closest('tr').remove()
    }
  })
} 
const del = document.querySelector('.del');
del.addEventListener('click',deleteTr) */

/* createArr = () =>{
  const trList = document.querySelectorAll('tr')
  const tableList = []
  let i = 0
  const firstTdList = trList[0].querySelectorAll('td')
  for (let item of firstTdList ){
    tableList[i] = {}
    trList.forEach((itemTr)=>{
      const tdList = itemTr.querySelectorAll('td')
    })
    tableList[i][item.textContent] = ''
    i++
    console.log(tableList)
  } 


}
createArr() */

 




