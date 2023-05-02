<?php 
require_once 'conexao.php';

try{
    //Inicia a transação 
    $pdo->beginTransaction();

    // Preparando a query das informações do usuário
    $query_usuario = $pdo->prepare("INSERT INTO tbusuario (nome, sobrenome, email, telefone, senha) VALUES (:nome, :sobrenome, :email, :telefone, :senha)");

    // Utiliza a função password_hash() para criptografar a senha antes de inserir no banco de dados
    $senha = password_hash($_POST['senha'], PASSWORD_ARGON2ID);

    $query_usuario->bindParam(':nome', $_POST['nome']);
    $query_usuario->bindParam(':sobrenome', $_POST['sobrenome']);
    $query_usuario->bindParam(':email', $_POST['email']);
    $query_usuario->bindParam(':telefone', $_POST['telefone']);
    $query_usuario->bindParam(':senha', $senha); 

    // Preparando a query das informações de endereço do usuário
    $query_endereco = $pdo->prepare("INSERT INTO tbendereco (codigoPostal, logradouro, numero, bairro, complemento, estado, cidade, codUser) VALUES (:codigoPostal, :logradouro, :numero, :bairro, :complemento, :estado, :cidade, :codUser)");

    $query_endereco->bindParam(':codigoPostal', $_POST['codigoPostal']);
    $query_endereco->bindParam(':logradouro', $_POST['logradouro']);
    $query_endereco->bindParam(':numero', $_POST['numero']);
    $query_endereco->bindParam(':bairro', $_POST['bairro']);
    $query_endereco->bindParam(':complemento', $_POST['complemento']);
    $query_endereco->bindParam(':estado', $_POST['estado']);
    $query_endereco->bindParam(':cidade', $_POST['cidade']);
    $query_endereco->bindParam(':codUser', $cod_usuario);

    //Executando a query das informações do usuário.
    $query_usuario->execute();

    // Recupera o ID do usuário inserido para vincular ao endereço
    $cod_usuario = $pdo->lastInsertId();

    //Executando a query das informações de endereço do usuário.
    $query_endereco->execute(); 

    //Comita as mudanças no banco de dados
    $pdo-> commit(); 
    header("location: ../login.php");
} catch (PDOException $e) {
    //Reverte as mudanças no banco de dados se algo der errado no cadastro
    $pdo->rollBack();
    $_SESSION["erroCadastro"] = 'Ocorreu um erro ao cadastrar o usuário: '. $e->getMessage();   
}

?>