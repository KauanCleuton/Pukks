<?php
require_once 'conexao.php';

// Define o número de produtos por página
$produtos_por_pagina = 1;

// Obtém o número total de produtos
$total_produtos = $pdo ->query("SELECT COUNT(*) FROM tbprodutos")->fetchColumn();

// Calcula o número total de páginas
$total_paginas = ceil($total_produtos / $produtos_por_pagina);

// Obtém a página atual
if (isset($_GET['pagina']) && is_numeric($_GET['pagina'])) {
    $pagina_atual = $_GET['pagina'];
} else {
    $pagina_atual = 1;
}

// Calcula o índice do primeiro produto da página
$primeiro_produto = ($pagina_atual - 1) * $produtos_por_pagina;

// Prepara a consulta SQL para obter os produtos da página atual



?>