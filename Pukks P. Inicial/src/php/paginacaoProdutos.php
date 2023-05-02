<?php
require_once 'conexao.php';

// Defina o número de produtos por página
$produtos_por_pagina = 8;

// Obtenha o gênero atual da URL
$genero_atual = isset($_GET['genero']) ? $_GET['genero'] : null;
// Obtenha o número total de produtos para o gênero atual
if ($genero_atual) {
    $total_produtos = $pdo->query("SELECT COUNT(*) FROM tbprodutos WHERE genero = '$genero_atual'")->fetchColumn();
} else {
    $total_produtos = $pdo->query("SELECT COUNT(*) FROM tbprodutos")->fetchColumn();
}

// Calcule o número total de páginas
$total_paginas = ceil($total_produtos / $produtos_por_pagina);

// Obtenha a página atual
if (isset($_GET['pagina']) && is_numeric($_GET['pagina'])) {
    $pagina_atual = $_GET['pagina'];
} else {
    $pagina_atual = 1;
}

// Calcule o índice do primeiro produto da página
$primeiro_produto = ($pagina_atual - 1) * $produtos_por_pagina;

?>
