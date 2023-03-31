const formRegister = document.querySelector('[data-js="form_cadastro"]')
const formRegisterBox1 = document.querySelector('.e-form__cadastro-1')
const formRegisterBox2 = document.querySelector('.e-form__cadastro-2')

const manipulatedBoxForms = () => {
  formRegisterBox1.classList.toggle('u-form__cadastro--hidden')
  formRegisterBox2.classList.toggle('u-form__cadastro--hidden')
}

formRegister.addEventListener('click', event => {
  const buttonNextForm = event.target.dataset.js === 'form_next'
  const buttonPrevForm = event.target.dataset.js === 'form_prev'
  if(buttonNextForm){
    manipulatedBoxForms()
  }

  if(buttonPrevForm){
    manipulatedBoxForms()
  }
})

$(document).ready(function(){
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
  $('#telefone').inputmask({mask: "(99) 99999-9999", jitMasking: true});
  $('#email').inputmask({
    mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
    jitMasking: true,
    greedy: false,
    onBeforePaste: function (pastedValue) {
      pastedValue = pastedValue.toLowerCase();
      return pastedValue.replace("mailto:", "");
    },
    definitions: {
      '*': {
        validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
        cardinality: 1,
        casing: "lower"
      }
    }
  });

});
