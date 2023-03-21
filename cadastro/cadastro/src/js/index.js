const buttonProceed = document.querySelector('#buttonProceed')
const formBoxOne = document.querySelector('#formBoxOne')
const formBoxTwo = document.querySelector('#formBoxTwo')
const buttonBack = document.querySelector('#buttonBack')

buttonProceed.addEventListener('click', () => {
    formBoxOne.classList.toggle('hide')
    formBoxTwo.classList.toggle('hide')
})

buttonBack.addEventListener('click', () => {
    formBoxOne.classList.toggle('hide')
    formBoxTwo.classList.toggle('hide')
})