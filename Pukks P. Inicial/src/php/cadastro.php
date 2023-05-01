<?php 
require_once 'conexao.php';

// Preparando e executando a query das informações do usuário
$query_usuario = $pdo->prepare("INSERT INTO tbusuario (nome, sobrenome, email, telefone, senha) VALUES (:nome, :sobrenome, :email, :telefone, :senha)");

// Utiliza a função password_hash() para criptografar a senha antes de inserir no banco de dados
$senha = password_hash($_POST['senha'], PASSWORD_ARGON2ID);

$query_usuario->bindParam(':nome', $_POST['nome']);
$query_usuario->bindParam(':sobrenome', $_POST['sobrenome']);
$query_usuario->bindParam(':email', $_POST['email']);
$query_usuario->bindParam(':telefone', $_POST['telefone']);
$query_usuario->bindParam(':senha', $senha); 

if($query_usuario->execute()){
    echo "Usuário cadastrado com sucesso!";
} else {
    echo "Erro ao cadastrar usuário.";
}

// Recupera o ID do usuário inserido para vincular ao endereço
$cod_usuario = $pdo->lastInsertId();


// Preparando e executando a query das informações de endereço do usuário
$query_endereco = $pdo->prepare("INSERT INTO tbendereco (codigoPostal, logradouro, numero, bairro, complemento, estado, cidade, codUser) VALUES (:codigoPostal, :logradouro, :numero, :bairro, :complemento, :estado, :cidade, :codUser)");

$query_endereco->bindParam(':codigoPostal', $_POST['codigoPostal']);
$query_endereco->bindParam(':logradouro', $_POST['logradouro']);
$query_endereco->bindParam(':numero', $_POST['numero']);
$query_endereco->bindParam(':bairro', $_POST['bairro']);
$query_endereco->bindParam(':complemento', $_POST['complemento']);
$query_endereco->bindParam(':estado', $_POST['estado']);
$query_endereco->bindParam(':cidade', $_POST['cidade']);
$query_endereco->bindParam(':codUser', $cod_usuario);

if($query_endereco->execute()){
    echo "Endereço cadastrado com sucesso!";
} else {
    echo "Erro ao cadastrar endereço.";
}

header("location: ../login.html");
?>