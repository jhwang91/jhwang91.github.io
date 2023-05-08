<?php
//1. Check that the user input a message AND username only
if (!empty($_POST['message']) && !empty($_POST['username'])) {
    //2. Connect to the DB 0
    try { //try-catch block
        $db = new PDO('mysql:host=localhost;dbname=wcoding;charset=utf8', 'root', '');
    } catch (Exception $e) {
        die('Error:' . $e->getMessage());
    }

    //3. Prepare an INSERT query 
    $insertSql = 'INSERT INTO CacaoTalk (username, message) VALUES (:inUsername, :inMessage)';
    $req = $db->prepare($insertSql);
    //4. Execute it, passing in the $_POST data
    $req->bindParam('inUsername',  $_POST['username'],  PDO::PARAM_STR);
    $req->bindParam('inMessage',  $_POST['message'],  PDO::PARAM_STR);
    // (   token   ,  value , type)               
    $req->execute();
}
//5. header('Location: index.php');
header("location: index.php");
// exit();
/*
*/