const formRegister = document.querySelector('[data-js="form_cadastro"]')
const formRegisterBox1 = document.querySelector('.e-form__cadastro-1')
const formRegisterBox2 = document.querySelector('.e-form__cadastro-2')
const inputsFormBox1 = formRegisterBox1.querySelectorAll('input')
const inputsFormBox2 = formRegisterBox2.querySelectorAll('input')


const createMessageText = () => {
  const textInvalidInput = document.createElement('p')
  textInvalidInput.setAttribute('class', 'u-invalid_form_text')
  textInvalidInput.textContent = 'por favor prencha o campo'
  return textInvalidInput
}

const removeMessageText = (inputs) => {
  inputs.forEach( input => input.addEventListener('keyup', () => {
    input.classList.remove('u-invalid_form')
    input.nextElementSibling.remove()
  }))
}


const isCompletedForm = (arrayForm) => {
  const inputsArray = [...arrayForm]
    inputsArray
    .filter(input => !Boolean(input.value))
    .map(input => {
      const textInvalid = createMessageText()
      if(!input.nextElementSibling){
        input.insertAdjacentElement('afterend',textInvalid)
      }      
      input.classList.add('u-invalid_form')
    })
  return inputsArray.every( input => !input.classList.contains('u-invalid_form'))
}

const manipulatedBoxForms = () => {
  formRegisterBox1.classList.toggle('u-form__cadastro--hidden')
  formRegisterBox2.classList.toggle('u-form__cadastro--hidden')
}


const passBoxForm = event => {
  const buttonNextForm = event.target.dataset.js === 'form_next'
  const buttonPrevForm = event.target.dataset.js === 'form_prev'
  if(buttonNextForm){
    if(isCompletedForm(inputsFormBox1)){
      manipulatedBoxForms()
    }
    removeMessageText(inputsFormBox1)
  }

  if(buttonPrevForm){
    manipulatedBoxForms()
  }
}

const submitForm = event => {
  event.preventDefault()
  if(isCompletedForm(inputsFormBox2)){
    formRegister.submit()
  }
  removeMessageText(inputsFormBox2)

}

const formatedInputsForm = () => {
  $('#cep').inputmask({mask: "99999-999", jitMasking: true});
  $('#numero-residencia').inputmask({
    mask: '9{1,5}a', 
    jitMasking: true,
    definitions: {"a":{casing: "upper"}}
  })
  $('#estado').inputmask({
    mask: "a{1,2}",
    jitMasking: true,
    definitions: {"a":{casing: "upper"}}
  })
  $('#cidade').inputmask({
    mask: "a{1,20}", 
    jitMasking: true,
    definitions: {'a':{ validator: '[A-Za-zà-úÀ-Ú ]', casing: 'upper'}}
  })
  $('#first-name').inputmask({
    mask:"a{1,20}", 
    jitMasking:true,
    definitions: {'a':{ validator:'[A-Za-zà-úÀ-Ú ]'}}
  });
  $('#second-name').inputmask({ 
    mask:"a{1,20}", 
    jitMasking:true,
    definitions: {'a':{ validator:'[A-Za-zà-úÀ-Ú ]'}}
  });
  $('#telefone').inputmask({mask: "(99) 99999-9999", jitMasking: true});
}

formRegister.addEventListener('click', passBoxForm)
formRegister.addEventListener('submit',submitForm)
$(formRegister).ready(formatedInputsForm);
