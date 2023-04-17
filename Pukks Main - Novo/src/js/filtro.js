export default function AsideFiltroCategoria({
    navCategoria, 
    buttonHide, 
    buttonShow, 
    navTamanho, 
    buttonHideTamanho,
    buttonShowTamanho,
    navFaixaPreco,
    buttonHideFaixaPreco,
    buttonShowFaixaPreco
}) {
    function TogleAsideCategoria() {
        navCategoria.classList.toggle('hide')
        
        buttonShow.classList.toggle('hide')
        buttonHide.classList.toggle('hide')
      }
    function TogleAsideTamanho() {
        
        navTamanho.classList.toggle('hide')
        buttonHideTamanho.classList.toggle('hide')
        buttonShowTamanho.classList.toggle('hide')
    }
    function TogleAsideFaixaPreco() {
        navFaixaPreco.classList.toggle('hide')
        buttonHideFaixaPreco.classList.toggle('hide')
        buttonShowFaixaPreco.classList.toggle('hide')
    }
    return {
        TogleAsideCategoria,
        TogleAsideTamanho,
        TogleAsideFaixaPreco
    }
}