const openModalBtn = document.querySelector('.open-modal')
const modalCloseBtn = document.querySelector('.close-modal')
const modalEl = document.querySelector('.modal')
const bodyEl = document.querySelector('body')

openModalBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    modalEl.classList.remove('is-hidden')
})
modalCloseBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    modalEl.classList.add('is-hidden')
})