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
  const countSlidePrevRestart =
    numberSlide < navButtons.length - navButtons.length
  const initialValue = navButtons.length - 1
  manipulateSlide(countSlidePrevRestart, initialValue)
}

if (!responsiveValueSlide.matches) {
  setInterval(nextSlide, 2500)
  buttonNext.addEventListener("click", nextSlide)
  buttonPrev.addEventListener("click", prevSlide)
}

// mobile toggle slide

const containerSlide = document.querySelector('[data-js="container-slide"]')
const containerButtonSlide = document.querySelectorAll(
  '[data-js="slide-item-buttons"]'
)
const slideWidth = 500

containerButtonSlide.forEach((item, index) => {
  item.addEventListener("click", () => {
    containerSlide.scrollTo(slideWidth * index, 0)
  })
})

containerSlide.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    event.target.scrollBy(300, 0)
  } else {
    event.target.scrollBy(-300, 0)
  }
})

// marcas slide

const buttonNextMarcas = document.querySelector('[data-js="btn-nextMarca"]')
const buttonPrevMarcas = document.querySelector('[data-js="btn-prevMarca"]')
const marcasItems = document.querySelectorAll(".e-marcas__slide__conteudo__container__item")
const containerMarcas = document.querySelector(".e-marcas__slide__conteudo__container")

let countSlideMarca = 0

buttonNextMarcas.addEventListener("click", (event) => {
  const slideShowTo = Math.round(containerMarcas.clientWidth / 230)
  if (countSlideMarca < (marcasItems.length - slideShowTo) * marcasItems[0].clientWidth + 100) {
    countSlideMarca += marcasItems[0].clientWidth + 100
    marcasItems.forEach(
      (item) => (item.style.transform = `translate(-${countSlideMarca}px)`)
    )
  }
})

buttonPrevMarcas.addEventListener("click", (event) => {
  if (countSlideMarca > 0) {
    countSlideMarca -= marcasItems[0].clientWidth + 100
  }
  marcasItems.forEach(
    (item) => (item.style.transform = `translate(-${countSlideMarca}px)`)
  )
})
