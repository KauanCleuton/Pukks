<?php
$hostname = "localhost"; // nome do host onde o banco de dados está instalado
$username = "root"; // nome de usuário do banco de dados
$password = ""; // senha do banco de dados
$database = "dbpukks"; // nome do banco de dados que você deseja se conectar

try {
    $pdo = new PDO("mysql:host=$hostname;dbname=$database", $username, $password);
    // defina o modo de erro do PDO como exceções
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Conexão bem sucedida!";
} catch(PDOException $e) {
    echo "Erro ao conectar: " . $e->getMessage();
}
?>