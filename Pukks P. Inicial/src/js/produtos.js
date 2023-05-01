const linkLocate = window.location.href
const parameters = new URLSearchParams(linkLocate)
const listPage = document.querySelector('.e-paginacao__list')
const containerPage = document.querySelector('[data-js="paginacao-container"]')


parameters.forEach( (item) => {
  const page = document.querySelector(`[data-js="${item}"]`)
  page.classList.add('u-active-page')
})


const updatePageCount = () => {
  const currentPage = Number(document.querySelector('.u-active-page').textContent)
  const maxPage = containerPage.clientWidth / 40
  if(maxPage > 3){
    if(maxPage - currentPage === 1){
      listPage.style.transform = `translateX(-${(currentPage -1) * 15}px)`
    }
    if(currentPage === maxPage){
      listPage.style.transform = `translateX(-${(currentPage -2) * 15}px)`
    }
  }
}

updatePageCount()
