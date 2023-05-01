const formRegister = document.querySelector('[data-js="form_cadastro"]')
const formRegisterBox1 = document.querySelector('.e-form__cadastro-1')
const formRegisterBox2 = document.querySelector('.e-form__cadastro-2')
const inputsFormBox1 = formRegisterBox1.querySelectorAll('input')
const inputsFormBox2 = formRegisterBox2.querySelectorAll('input')


const createMessageText = (className, arrayText) => {
  const array = []
  arrayText.forEach( text => {
    const textInvalidInput = document.createElement('p')
    textInvalidInput.setAttribute('class', className)
    textInvalidInput.textContent = text
    array.push(textInvalidInput)
  })
  return array
}

const removeMessageText = (inputs) => {
  inputs.forEach( input => input.addEventListener('keyup', ({target}) => {
    target.classList.remove('u-invalid_form')
    target.nextElementSibling.remove()
  }))
}


const isCompletedForm = (arrayForm) => {
  const inputsArray = [...arrayForm]
    inputsArray
    .filter(input => !Boolean(input.value))
    .map(input => {
      const messageInvalidInput = createMessageText('u-invalid_form_text', ['complete o campo para prosseguir'])
      if(!input.nextElementSibling){
        input.insertAdjacentElement('afterend',...messageInvalidInput)
      }      
      input.classList.add('u-invalid_form')
    })
  return inputsArray.every( input => !input.classList.contains('u-invalid_form'))
}

const manipulatedBoxForms = () => {
  formRegisterBox1.classList.toggle('u-form__cadastro--hidden')
  formRegisterBox2.classList.toggle('u-form__cadastro--hidden')
}

const confirmPassword = () => {
  const password = formRegister['senha']
  const confirmPassword = formRegister['confirm-senha']
  if(password.value === confirmPassword.value){
    return true
  }else{
    const messageInconfirmPassword = createMessageText('u-invalid_form_text', ['senha incorreta'])
    confirmPassword.classList.add('u-invalid_form')
    confirmPassword.insertAdjacentElement('afterend',...messageInconfirmPassword)
  }
}

const validPassword = () => {
  const password = formRegister['senha']
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
  const testeRegex = regex.test(password.value)
  if(!testeRegex){
    password.classList.add('u-invalid_form')
    const messageValidPassword = createMessageText('u-invalid_form_text', [
      'é preciso possuir no minimo 8 caracteres',
      'possuir numeros ex: 123...',
      'possuir possuir letras maiusculas ex: ABC...',
      'e minusculas ex: abc',
      'possuir caracteres especial ex: @, $, %...'
    ])
    messageValidPassword.reverse().forEach(message => password.insertAdjacentElement('afterend', message))
  }else{
    return true
  }
}



const passBoxForm = event => {
  const buttonNextForm = event.target.dataset.js === 'form_next'
  const buttonPrevForm = event.target.dataset.js === 'form_prev'
  const arrayInputs = [...inputsFormBox1].filter(item => !item.classList.contains('opcional'))
  if(buttonNextForm){
    const completedForm = isCompletedForm(arrayInputs)
    if(completedForm){
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
  const completedForm = isCompletedForm(inputsFormBox2) && confirmPassword() && validPassword()
  if(completedForm){
    formRegister.submit()
    formRegister.reset()
  }
  removeMessageText(inputsFormBox2)
  
}

const formatedInputsForm = () => {
  $('#codigoPostal').inputmask({mask: "99999-999", jitMasking: true});
  $('#numero').inputmask({
    mask: '9{1,5}a', 
    jitMasking: true,
    definitions: {"a":{casing: "upper"}}
  });
  $('#estado').inputmask({
    mask: "a{1,2}",
    jitMasking: true,
    definitions: {"a":{casing: "upper"}}
  });
  $('#cidade').inputmask({
    mask: "a{1,20}",
    jitMasking: true,
    definitions: {'a':{ validator: '[A-Za-zà-úÀ-Ú ]', casing: 'upper'}}
  });
  $('#bairro').inputmask({
    mask: "a{1,20}", 
    jitMasking: true,
    definitions: {'a':{ validator: '[A-Za-zà-úÀ-Ú ]'}}
  });
  $('#nome').inputmask({
    mask:"a{1,20}", 
    jitMasking:true,
    definitions: {'a':{ validator:'[A-Za-zà-úÀ-Ú ]'}}
  });
  $('#sobrenome').inputmask({ 
    mask:"a{1,20}", 
    jitMasking:true,
    definitions: {'a':{ validator:'[A-Za-zà-úÀ-Ú ]'}}
  });
  $('#telefone').inputmask({mask: "(99)99999-9999", jitMasking: true});
}

formRegister.addEventListener('click', passBoxForm)
formRegister.addEventListener('submit',submitForm)
$(formRegister).ready(formatedInputsForm);
