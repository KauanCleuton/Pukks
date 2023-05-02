<?php
include_once 'conexao.php';
// Começa uma transação
$pdo->beginTransaction();

try {
  // Insere o produto na tabela tbprodutos
    $stmt = $pdo->prepare("INSERT INTO tbprodutos (nomeProduto, categoria, marca, tipo, preco, genero) 
                            VALUES (:nome, :categoria, :marca, :tipo, :preco, :genero)");
    $stmt->bindParam(':nome', $_POST['nomeProduto']);
    $stmt->bindParam(':categoria', $_POST['categoria']);
    $stmt->bindParam(':marca', $_POST['marca']);
    $stmt->bindParam(':tipo', $_POST['tipo']);
    $stmt->bindParam(':preco', $_POST['preco']);
    $stmt->bindParam(':genero', $_POST['genero']);
    $stmt->execute();

    // Pega o ID do produto que acabou de ser inserido
    $codProduto = $pdo->lastInsertId();

    if(isset($_FILES['url'])) {
        $imagem = $_FILES ['url'];
        if ($imagem['error']){
            die ('Falha ao enviar arquivo');
        }
        //Limita o tamanho do arquivo.
        if ($imagem['size'] > 5242880){
            die ('Arquivo muito grande. MAX: 5mb');
        }

        //Salva o caminho de onde vai ficar as imagens, gera um id unico e obtém a extensão do arquivo enviado.
        $pasta = "uploads/produtos/";
        $nomeImagem = $imagem['name'];
        $novoNomeImagem = uniqid();
        $extensaoArquivo = strtolower(pathinfo($nomeImagem, PATHINFO_EXTENSION));

        //Verifica se a extensão do arquivo é png ou jpg, para evitar arquivos maliciosos.
        if ($extensaoArquivo != "jpg" && $extensaoArquivo != "png"){
            die ("Formato de arquivo não aceito, use apenas imagens.");
        }

        //Finalmente faz a troca do nome original do arquivo para um gerado randomicamente e que não se repete, evitando a perda de imagens com o mesmo nome e salva o caminho da imagem no banco de dados.
        $pathImagem = $pasta . $novoNomeImagem . "." . $extensaoArquivo;
        $uploadOk = move_uploaded_file($imagem["tmp_name"],'../' . $pathImagem);

        if ($uploadOk){
            echo "Arquivo enviado com sucesso";

            $query_imagem = $pdo->prepare("INSERT INTO tbimagens (url) VALUES ('$pathImagem')");
            $query_imagem->bindParam($pathImagem, $_POST['url']);

            $query_imagem->execute();

            $cod_imagem = $pdo->lastInsertId();
        } else {
            die ("Falha ao enviar arquivo");
        }
    }

  // Pega o ID da imagem que acabou de ser inserida
  $codImagem = $pdo->lastInsertId();

  // Insere o relacionamento entre o produto e a imagem na tabela tbproduto_imagem
  $stmt = $pdo->prepare("INSERT INTO tbproduto_imagem (codProduto, codImagem) VALUES (:codProduto, :codImagem)");
  $stmt->bindParam(':codProduto', $codProduto);
  $stmt->bindParam(':codImagem', $codImagem);
  $stmt->execute();

  // Se tudo ocorrer bem, confirma a transação
  $pdo->commit();
  
  // Exibe mensagem de sucesso
  echo "Produto cadastrado com sucesso!";
  header("location: ../admin/cadastrar_produtos.html");

} catch(PDOException $e) {
  // Se ocorrer algum erro, desfaz a transação
  $pdo->rollback();
  
  // Exibe mensagem de erro
  echo "Erro ao cadastrar produto: " . $e->getMessage();
}
?>