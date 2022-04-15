'use strict'

const buttons = document.querySelectorAll('.open-modal')
const container = document.querySelector('.modal-container')
const modalContent = document.querySelector('.modal-content')
const modalWindow = document.querySelector('.modal-window')
const closeElements = document.querySelectorAll('[data-close="close"]')


const handleCloseModal = () => container.style.display = 'none'
const handleOpenModal = () => container.style.display = 'flex'


buttons.forEach((button) => button.addEventListener('click', handleOpenModal))
closeElements.forEach(elem => elem.addEventListener("click", handleCloseModal))
container.addEventListener('click',handleCloseModal)
modalWindow.addEventListener('click',(e) => e.stopPropagation())