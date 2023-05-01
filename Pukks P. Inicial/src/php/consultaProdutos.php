<?php
require_once 'conexao.php';
include_once 'paginacaoProdutos.php';
// Prepare a consulta SQL para obter os produtos da página atual
$sql = "SELECT * FROM tbprodutos LIMIT $primeiro_produto, $produtos_por_pagina";
$stmt2 = $pdo->prepare($sql);
$stmt2->execute();
$produtos = $stmt2;
?>