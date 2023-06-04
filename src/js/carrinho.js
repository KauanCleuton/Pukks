// // Utils 
// const dropdownButtonSpan = document.querySelector('[data-js="button-span"]');
// const dropdownButton = document.querySelector(".dropdown-button");
// const dropdownContent = document.querySelector(".dropdown-content");
// const tamanhos = document.querySelector('[data-js="e-tamanhos"]');

// const dropdownOptions = document.querySelectorAll('[data-js="e-tamanho"]');

// const buttonLesser = document.querySelector('[data-js="e-button-lesser"]')
// const buttonMore = document.querySelector('[data-js="e-button-more"]')
// const spanQuantidades = document.querySelectorAll('.e-span__quantidade');
// const qtyDatas = document.querySelectorAll('[data-js="e-qty"]');
// const dataPrecos = document.querySelectorAll('[data-js="e-span-preco"]');
// const dataTotais = document.querySelectorAll('[data-js="e-span-total"]');
// const spanPrecoTotal = document.querySelector('.e-span__preco-total');

// const eTableTr = document.querySelectorAll('[data-js="e-table-tr"]');
// const btnRemove = document.querySelectorAll('[data-js="btn-remove"]');

// const selectionTodos = document.getElementById('e-selection-todos');
// const precoTotal = document.querySelectorAll('[data-js="e-span-preco"]');
// const spanTotalProdutos = document.querySelector('[data-js="e-span-total-produtos"]');
// const spanTotalProdutosItem = document.querySelectorAll('[data-js="e-span-total-produtos-item"]');
// const spanTotalItem = document.querySelectorAll('[data-js="e-span-total-item"]');




// // tamanhos
// dropdownButton.addEventListener("click", () => {
//   dropdownContent.classList.toggle("u-hide");
// });


// dropdownOptions.forEach((option) => {
//   option.addEventListener("click", () => {
//     dropdownButtonSpan.textContent = option.textContent;
//     dropdownContent.classList.add("u-hide");
//   });
// })
// // Input Quantidade



// function qtyLesser(spanQuantidade, dataPreco, dataTotal) {
//   let quantidade = parseInt(spanQuantidade.textContent);
//   quantidade = quantidade - 1 < 1 ? 1 : quantidade - 1;
//   spanQuantidade.textContent = quantidade;
//   let totalPreco = parseInt(dataPreco.textContent) * quantidade;
//   dataTotal.textContent = totalPreco;
//   updatePrecoTotal();
// }

// function qtyMore(spanQuantidade, dataPreco, dataTotal) {
//   let numberMore = parseInt(spanQuantidade.textContent);
//   let numberPrice = parseInt(dataPreco.textContent);

//   let numberQuantidade = numberMore + 1;

//   spanQuantidade.textContent = numberQuantidade;
//   let totalPreco = numberPrice * numberQuantidade;
//   dataTotal.textContent = totalPreco;
//   updatePrecoTotal();
// }

// function updatePrecoTotal() {
//   let total = 0;
//   dataTotais.forEach((dataTotal) => {
//     total += parseInt(dataTotal.textContent);
//   });
//   spanPrecoTotal.textContent = total;
// }

// qtyDatas.forEach((qtyData, index) => {
//   qtyData.addEventListener('click', ({ target }) => {
//     const spanQuantidade = spanQuantidades[index];
//     const dataPreco = dataPrecos[index];
//     const dataTotal = dataTotais[index];

    
//     if (target.dataset.js === 'e-button-lesser') {
//       qtyLesser(spanQuantidade, dataPreco, dataTotal);
//     } else if (target.dataset.js === 'e-button-more') {
//       qtyMore(spanQuantidade, dataPreco, dataTotal);
//     }
//   });
// })
// // Remove Cart


// function removeCard(event) {
//   const card = event.target.parentNode.parentNode
//   card.remove()
// }

// btnRemove.forEach((button) => {
//   button.addEventListener('click', removeCard)
// })

// // Resumo do Pedido 
// function atualizaTotal() {
//   let total = 0;
//   let totalSelecionados = 0;
//   precoTotal.forEach((preco) => {
//     const checkbox = preco.parentNode.parentNode.querySelector('input[type="checkbox"]');
//     if (checkbox.checked) {
//       totalSelecionados++;
//       const precoValor = parseFloat(preco.textContent);
//       const quantidade = preco.parentNode.parentNode.querySelector('.e-span__quantidade').textContent || 1;
//       let totalProduto = precoValor * parseInt(quantidade);;
//       total += totalProduto;
//     }
    
//   });
//   spanTotalProdutos.textContent = `${totalSelecionados}`;
//   spanTotalProdutosItem.forEach((span) => {
//     span.textContent = totalSelecionados;
//   });
//   spanTotalItem.forEach((span) => {
//     span.textContent = total.toFixed(2);
//   });
// }

// selectionTodos.addEventListener('click', () => {
//   let selecionado = false;
//   const precoTotal = document.querySelectorAll('[data-js="e-span-preco"]');
//   precoTotal.forEach((preco) => {
//     const checkbox = preco.parentNode.parentNode.querySelector('input[type="checkbox"]');
//     if (checkbox.checked) {
//       selecionado = true;
//       return;
//     }
//   });
//   precoTotal.forEach((preco) => {
//     const checkbox = preco.parentNode.parentNode.querySelector('input[type="checkbox"]');
//     checkbox.checked = !selecionado;
//   });
//   atualizaTotal();
// });

// precoTotal.forEach((preco) => {
//   const checkbox = preco.parentNode.parentNode.querySelector('input[type="checkbox"]');
//   checkbox.addEventListener('click', () => {
//     atualizaTotal();
//   });

// });


// Utils 
const dropdownButtonSpan = document.querySelector('[data-js="button-span"]');
const dropdownButton = document.querySelector(".dropdown-button");
const dropdownContent = document.querySelector(".dropdown-content");
const tamanhos = document.querySelector('[data-js="e-tamanhos"]');

const dropdownOptions = document.querySelectorAll('[data-js="e-tamanho"]');


const spanQuantidades = document.querySelectorAll('.e-span__quantidade');
const qtyDatas = document.querySelectorAll('[data-js="e-qty"]');
const dataPrecos = document.querySelectorAll('[data-js="e-span-preco"]');
const dataTotais = document.querySelectorAll('[data-js="e-span-total"]');
const spanPrecoTotal = document.querySelector('.e-span__preco-total');

const eTableTr = document.querySelectorAll('[data-js="e-table-tr"]');
const btnRemove = document.querySelectorAll('[data-js="btn-remove"]');

const selectionTodos = document.getElementById('e-selection-todos');
const precoTotal = document.querySelectorAll('[data-js="e-span-preco"]');
const spanTotalProdutos = document.querySelector('[data-js="e-span-total-produtos"]');
const spanTotalProdutosItem = document.querySelectorAll('[data-js="e-span-total-produtos-item"]');
const spanTotalItem = document.querySelectorAll('[data-js="e-span-total-item"]');
const cartTable = document.querySelector('.e-cart__table')




// tamanhos
dropdownButton.addEventListener("click", () => {
  dropdownContent.classList.toggle("u-hide");
});


dropdownOptions.forEach((option) => {
  option.addEventListener("click", () => {
    if(selectionTodos.checked === false) {
      dropdownButtonSpan.textContent = option.textContent;
      dropdownContent.classList.add("u-hide");
    }
  });
})
// Input Quantidade



function qtyLesser(spanQuantidade, dataPreco, dataTotal) {
  let quantidade = parseInt(spanQuantidade.textContent);
  quantidade = quantidade - 1 < 1 ? 1 : quantidade - 1;
  spanQuantidade.textContent = quantidade;
  let totalPreco = parseInt(dataPreco.textContent) * quantidade;
  dataTotal.textContent = totalPreco;
  updatePrecoTotal();
}

function qtyMore(spanQuantidade, dataPreco, dataTotal) {
  let numberMore = parseInt(spanQuantidade.textContent);
  let numberPrice = parseInt(dataPreco.textContent);

  let numberQuantidade = numberMore + 1;

  spanQuantidade.textContent = numberQuantidade;
  let totalPreco = numberPrice * numberQuantidade;
  dataTotal.textContent = totalPreco;
  updatePrecoTotal();
}

function updatePrecoTotal() {
  let total = 0;
  dataTotais.forEach((dataTotal) => {
    total += parseInt(dataTotal.textContent);
  });
  spanPrecoTotal.textContent = total;
}

qtyDatas.forEach((qtyData, index) => {
  qtyData.addEventListener('click', ({ target }) => {
    const spanQuantidade = spanQuantidades[index];
    const dataPreco = dataPrecos[index];
    const dataTotal = dataTotais[index];

    if (target.dataset.js === 'e-button-lesser' && selectionTodos.checked === false) {
      qtyLesser(spanQuantidade, dataPreco, dataTotal);
    } else if (target.dataset.js === 'e-button-more' && selectionTodos.checked === false) {
      qtyMore(spanQuantidade, dataPreco, dataTotal);
    }
  });
})
// Remove Cart


function removeCard(event) {
  const card = event.target.parentNode.parentNode
  card.remove()
}

btnRemove.forEach((button) => {
  button.addEventListener('click', removeCard)
})

// Resumo do Pedido 
function atualizaTotal() {
  let total = 0;
  let totalSelecionados = 0;
  precoTotal.forEach((preco) => {
    const checkbox = preco.parentNode.parentNode.querySelector('input[type="checkbox"]');
    if (checkbox.checked) {
      totalSelecionados++;
      const precoValor = parseFloat(preco.textContent);
      const quantidade = preco.parentNode.parentNode.querySelector('.e-span__quantidade').textContent || 1;
      let totalProduto = precoValor * parseInt(quantidade);;
      total += totalProduto;
    }
    
  });
  spanTotalProdutos.textContent = `${totalSelecionados}`;
  spanTotalProdutosItem.forEach((span) => {
    span.textContent = totalSelecionados;
  });
  spanTotalItem.forEach((span) => {
    span.textContent = total.toFixed(2);
  });
}

selectionTodos.addEventListener('click', () => {
  let selecionado = false;
  const precoTotal = document.querySelectorAll('[data-js="e-span-preco"]');
  precoTotal.forEach((preco) => {
    const checkbox = preco.parentNode.parentNode.querySelector('input[type="checkbox"]');
    if (checkbox.checked) {
      selecionado = true;
      return;
    }
    
  });
  precoTotal.forEach((preco) => {
    const checkbox = preco.parentNode.parentNode.querySelector('input[type="checkbox"]');
    checkbox.checked = !selecionado;
    cartTable.classList.toggle('u-cover-card')
  });
  atualizaTotal();
});
