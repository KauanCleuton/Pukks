<?php
session_start(); // Inicia a sessão

if($_SERVER["REQUEST_METHOD"] == "POST") {
    // Inclui o arquivo de conexão
    require_once "conexao.php";
    
    // Obtém as credenciais do usuário do formulário de login
    $email = $_POST["email"];
    $senha = $_POST["senha"];
    
    // Prepara a consulta SQL para verificar as credenciais
    $query = "SELECT * FROM tbusuario WHERE email = :email AND senha = :senha";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":email", $email);
    $stmt->bindParam(":senha", $senha);
    $stmt->execute();
    
    // Verifica se o usuário existe e a senha está correta
    if($stmt->rowCount() == 1) {
        // Obtém as informações do usuário
        $usuario = $stmt->fetch(PDO::FETCH_ASSOC);
        
        // Define as informações do usuário na sessão
        $_SESSION["codUser"] = $usuario["codUser"];
        $_SESSION["nome"] = $usuario["nome"];
        $_SESSION["email"] = $usuario["email"];
        
        // Redireciona o usuário para a página de dashboard
        // header("location: ../index.html");
        // echo "<p> Bem-vindo, " . $_SESSION["nome"] . "</p>";
    } else {
        // Exibe uma mensagem de erro de login
        echo "E-mail ou senha incorretos";
    }
}
$dados = array(
    "id" => $_SESSION["id"],
    "nome" => $_SESSION["nome"],
    "email" => $_SESSION["email"]
);

$json = json_encode($dados);

header("Content-type: application/json");
?>