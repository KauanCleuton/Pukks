const inputFile = document.querySelector('#img-produto')
const fileName = document.querySelector('.file_name')

inputFile.addEventListener('change', event => {
  fileName.textContent = event.target.value
})