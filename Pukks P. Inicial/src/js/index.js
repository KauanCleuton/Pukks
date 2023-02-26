
// mobile menu 
const btnHambuger = document.querySelector('[data-js="btn-hambuger"]')
const menu = document.querySelector('[data-js="menu-list"]')

const toggleMenu = event => {
  if(event.type === 'touchstart'){
    event.preventDefault()
  } 
  menu.classList.toggle('isActiveMenu')
}


btnHambuger.addEventListener('click', toggleMenu)
btnHambuger.addEventListener('touchstart', toggleMenu)

