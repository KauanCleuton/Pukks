if(document.URL === 'http://127.0.0.1:5500/Pukks%20P.%20Inicial/src/index.html#'){
  // mobile menu
  const btnHambuger = document.querySelector('[data-js="btn-hambuger"]')
  const menu = document.querySelector('[data-js="menu-list"]')
  const toggleMenu = (event) => {
    if (event.type === "touchstart") {
      event.preventDefault()
    }
    menu.classList.toggle("isActiveMenu")
  }
  
  btnHambuger.addEventListener("click", toggleMenu)
  btnHambuger.addEventListener("touchstart", toggleMenu)
  
  // slide
  
  const buttonNext = document.querySelector('[data-js="btn-next"]')
  const buttonPrev = document.querySelector('[data-js="btn-prev"]')
  const navButtons = document.querySelectorAll('[data-js="nav-button"]')
  const responsiveValueSlide = window.matchMedia("(max-width:800px)")
  
  const containerSlide = document.querySelector('[data-js="container-slide"]')
  const slideWidth = containerSlide.clientWidth
  
  let numberSlide = 0
  
  const modifySlide = (index, button) =>
    numberSlide === index ? (button.checked = true) : (button.checked = false)
  
  const restartSlideCount = (expresion, value) =>
    expresion ? (numberSlide = value) : numberSlide
  
  const manipulateSlide = (countRestart, initialValue) => {
    navButtons.forEach((navButton, index) => {
      restartSlideCount(countRestart, initialValue)
      modifySlide(index, navButton)
    })
  }
  
  const nextSlide = () => {
    numberSlide++
    const countSlideNextRestart = numberSlide > navButtons.length - 1
    const initialValue = 0
    manipulateSlide(countSlideNextRestart, initialValue)
  }
  
  const prevSlide = () => {
    numberSlide--
    const countSlidePrevRestart = numberSlide < navButtons.length - navButtons.length
    const initialValue = navButtons.length - 1
    manipulateSlide(countSlidePrevRestart, initialValue)
  }
  
  if (!responsiveValueSlide.matches) {
    setInterval(nextSlide, 2500)
    buttonNext.addEventListener("click", nextSlide)
    buttonPrev.addEventListener("click", prevSlide)
  }else {
    navButtons.forEach((button, index) => {
      const scrollSlide = () =>{
        containerSlide.scrollTo(slideWidth * index, 0)
        button.checked
      }
      button.addEventListener("click", scrollSlide)
    })
  }
  
  // marcas slide
  
  const marcasItems = document.querySelectorAll('[data-js="marcas_slide_item"]')
  const containerMarcas = document.querySelector('[data-js="slide_marcas_conteudo"]')
  
  let countSlideMarca = 0
  
  const translateSlide = (widthItem) => {
   marcasItems.forEach(
        (item) => (item.style.transform = `translate(-${widthItem * countSlideMarca}px)`)
      )
  }
  
  const slideMarcasEvent = ({target}) => {
    const slideItemWidth = marcasItems[0].offsetWidth * 1.8
    const slideShowTo = Math.floor(containerMarcas.clientWidth / slideItemWidth)
  
    console.log(slideItemWidth)
    console.log(slideShowTo)
    if(target.dataset.js === 'btn-nextMarca'){
      const itemsHiddenInSlideMarcas = countSlideMarca < marcasItems.length - slideShowTo
      if (itemsHiddenInSlideMarcas) {
        countSlideMarca++
        translateSlide(slideItemWidth)
      }
    }
  
    if(target.dataset.js === 'btn-prevMarca'){
      if (countSlideMarca > 0) {
        countSlideMarca--
        translateSlide(slideItemWidth)
      }
    }
  }
  
  containerMarcas.addEventListener("click", slideMarcasEvent)
}


// login page

// const formLogin = document.querySelector('[data-js="form_login"]')

// formLogin.addEventListener('submit', event => {
//   event.preventDefault()
//   const emailInput = event.target.email.value
//   const senhaInput = event.target.senha.value
//   if(){

//   }
// })




