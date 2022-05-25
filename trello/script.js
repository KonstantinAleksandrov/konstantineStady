'use strict'

const columns = new Map()
let activeFormName = ""


const renderColumnList = (columnList) => { // TODO Отрисовать колонки

}

const renderCardList = () => { // TODO Отрисовать Карточки внутри колонки

}

const handleAddColumn = (name) => {
  columns.set(name, [])
  renderColumnList(columns)
}

const openForm = (target, handler, btnText) => {
  const defaultForm = document.querySelector('.template__form')
  const form = defaultForm.cloneNode(true)
  form.classList.remove('template__form')
  form.style.display = "block"
  const formBtn = form.querySelector('.form-footer__add')
  formBtn.textContent = btnText
  formBtn.addEventListener('click', () => {
    handler(activeFormName)
    activeFormName = ''
  })

  form.querySelector('textarea').addEventListener('input', (e) => activeFormName = e.target.value )
  target.after(form)
}

const addColumnBtn = document.querySelector('.add-column')
addColumnBtn.addEventListener('click', (e) => openForm(e.target, (e) => handleAddColumn(e), "add column"))