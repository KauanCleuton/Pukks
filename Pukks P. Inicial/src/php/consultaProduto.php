<?php
require_once 'conexao.php';

// Verifiqca se o parâmetro codProduto está presente na URL
if (isset($_GET['codProduto'])) {
    // Obtém o valor do parâmetro codProduto
    $codProduto = $_GET['codProduto'];
    echo $codProduto;
    // Prepare a consulta SQL para obter o produto com base no codProduto
    $sql = "SELECT p.*, i.url
            FROM tbprodutos p
            INNER JOIN tbproduto_imagem pi ON p.codProduto = pi.codProduto
            INNER JOIN tbimagens i ON i.codImagem = pi.codImagem
            WHERE p.codProduto = :codProduto";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':codProduto', $codProduto);
    $stmt->execute();
    
    // Verifica se o produto foi encontrado
    if ($stmt->rowCount() > 0) {
        // Recupera os dados do produto
        $produto = $stmt->fetch(PDO::FETCH_ASSOC);
        
    } else {
        echo "Produto não encontrado.";
    }
    
} else {
    echo "Código do produto não especificado.";
}