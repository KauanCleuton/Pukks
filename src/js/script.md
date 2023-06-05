// const eTableTr = document.querySelectorAll('[data-js="e-table-tr"]');
// const btnRemove = document.querySelectorAll('[data-js="btn-remove"]');

// function removeCard(event) {
//   const card = event.target.parentNode.parentNode
//   card.remove()
// }

// btnRemove.forEach((button) => {
//   button.addEventListener('click', removeCard)
// })



// Remove Cart


const eTableTr = document.querySelectorAll('[data-js="e-table-tr"]');
const btnRemove = document.querySelectorAll('[data-js="btn-remove"]');

btnRemove.forEach((button) => {
  button.addEventListener("click", () => {
    const row = button.closest("tr");
    row.parentNode.removeChild(row);
  });
});








// Resumo do Pedido 
const selectionTodos = document.getElementById('e-selection-todos');
const precoTotal = document.querySelectorAll('[data-js="e-span-preco"]');
const spanTotalProdutos = document.querySelector('[data-js="e-span-total-produtos"]');
const spanTotalProdutosItem = document.querySelectorAll('[data-js="e-span-total-produtos-item"]');
const spanTotalItem = document.querySelectorAll('[data-js="e-span-total-item"]');

function atualizaTotal() {
  let total = 0;
  let totalSelecionados = 0;
  precoTotal.forEach((preco) => {
    const checkbox = preco.parentNode.parentNode.querySelector('input[type="checkbox"]');
    if (checkbox.checked == true) {
      totalSelecionados++;
      const precoValor = parseFloat(preco.textContent);
      const quantidade = preco.parentNode.parentNode.querySelector('.e-span__quantidade').textContent || 1;
      let totalProduto = precoValor * parseInt(quantidade);;
      total += totalProduto;
    }
    else if (checkbox.checked == false) {
      totalSelecionados = 0;

      total += 0
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
  });
  atualizaTotal();
});

precoTotal.forEach((preco) => {
  const checkbox = preco.parentNode.parentNode.querySelector('input[type="checkbox"]');
  checkbox.addEventListener('click', () => {
    atualizaTotal();
  });

  const quantidadeInput = preco.parentNode.parentNode.querySelector('[data-js="e-qty"]');

  if (quantidadeInput) {

    buttonLesser.addEventListener('click', () => {
      let quantidade = parseInt(quantidade.textContent) || 1;
      quantidade = Math.max(1, quantidade - 1);
      quantidade.textContent = quantidade;
      atualizaTotal();
    });
    buttonMore.addEventListener('click', () => {
      let quantidade = parseInt(quantidade.textContent) || 1;
      quantidade++;
      quantidade.textContent = quantidade;
      atualizaTotal();
    });
  }
});

