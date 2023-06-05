

export default function AsideFiltro({}) {
    
    const toggleAside = (element) => {
    
        const includesPlusSign = element.textContent.includes('+')

        element.nextElementSibling.classList.toggle('hide')
        if(includesPlusSign){
            element.textContent = element.textContent.replace('+', '-')
        }else{
            element.textContent = element.textContent.replace('-', '+')
    
        }
    }
    
    const maniplateAside = ({target}) => {
        if(target.dataset.js === 'button-show'){
            toggleAside(target)
        }
    }
    
    return {
        maniplateAside
    }    
    
} 



