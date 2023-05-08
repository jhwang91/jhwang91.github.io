<?php
try { //try-catch block
    $db = new PDO('mysql:host=localhost;dbname=wcoding;charset=utf8', 'root', '');
} catch (Exception $e) {
    die('Error:' . $e->getMessage());
}

$limit = 0;
if (isset($_GET['limit'])) {
    $limit = $_GET['limit'];
}

$response = $db->prepare('SELECT id, username, message, date_created FROM CacaoTalk ORDER BY id DESC LIMIT :limit, 10');
$response->bindParam('limit', $limit, PDO::PARAM_INT);
$response->execute();

// $response = $db->query('SELECT id, username, message, date_created FROM CacaoTalk ORDER BY id DESC LIMIT 10');
while ($message = $response->fetch(PDO::FETCH_OBJ)) {
    include 'messageView.php'; //php will send back the html n js
}
//Connet to the db 0
//SELECT the most recent 10 messages from the db 0 
//ORDER BY id DESC LIMIT 10
//loop while fetching 0
//include messageView.php 0
