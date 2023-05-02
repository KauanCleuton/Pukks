<?php
$hostname = "localhost"; // nome do host onde o banco de dados está instalado
$username = "root"; // nome de usuário do banco de dados
$password = ""; // senha do banco de dados
$database = "dbpukks"; // nome do banco de dados vai se conectar

try {
    $pdo = new PDO("mysql:host=$hostname;dbname=$database", $username, $password);
    // define o modo de erro do PDO como exceções
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) { 
    echo "Erro ao conectar: " . $e->getMessage();
}
?>