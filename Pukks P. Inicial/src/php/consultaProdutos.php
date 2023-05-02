<?php
require_once 'conexao.php';
include 'paginacaoProdutos.php';

// Prepare a consulta SQL para obter os produtos da página atual
if ($genero_atual) {
        $sql = "SELECT p.*, i.url
        FROM tbprodutos p
        LEFT JOIN tbproduto_imagem pi ON p.codProduto = pi.codProduto
        LEFT JOIN tbimagens i ON pi.codImagem = i.codImagem
        WHERE genero = '$genero_atual' 
        LIMIT $primeiro_produto, $produtos_por_pagina";   
} else {
        $sql = "SELECT p.*, i.url
        FROM tbprodutos p
        LEFT JOIN tbproduto_imagem pi ON p.codProduto = pi.codProduto
        LEFT JOIN tbimagens i ON pi.codImagem = i.codImagem 
        LIMIT $primeiro_produto, $produtos_por_pagina";
}


$stmt = $pdo->prepare($sql);
$stmt->execute();

// Obtém os resultados
$produtos = $stmt->fetchAll(PDO::FETCH_ASSOC);

?>