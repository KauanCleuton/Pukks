// Menu
const btnHambuger = document.querySelector('[data-js="btn-hambuger"]')
const menu = document.querySelector('[data-js="menu-list"]')


// Tamanhos
const dropdownButtonSpan = document.querySelector('[data-js="button-span"]');
const dropdownButton = document.querySelector(".e-dropdown-button");
const dropdownContent = document.querySelector(".e-dropdown-content");
const tamanhos = document.querySelector('[data-js="e-tamanhos-option"]');
const dropdownOptions = document.querySelectorAll('[data-js="e-tamanhos"]');

// trocar imagem com hover
const SmallCard = document.querySelectorAll('[data-js="e-small-card"]');
const assetsMain = document.querySelector('.e-assets-main');

SmallCard.forEach((element) => {
  element.addEventListener('mouseover', () => {
    const imageUrl = element.getAttribute('src');
    assetsMain.setAttribute('src', imageUrl);
  });
});

// Tamanhos

dropdownButton.addEventListener("click", () => {
  dropdownContent.classList.toggle("u-hide");
});


dropdownOptions.forEach((option) => {
  option.addEventListener("click", () => {
      dropdownButtonSpan.textContent = option.textContent;
      dropdownContent.classList.add("u-hide");
  });
})


// Mobile Menu
const toggleMenu = (event) => {
    if (event.type === "touchstart") {
      event.preventDefault()
    }
    menu.classList.toggle("isActiveMenu")
}

btnHambuger.addEventListener("click", toggleMenu)
btnHambuger.addEventListener("touchstart", toggleMenu)