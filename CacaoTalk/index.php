<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/8fdb5fe5af.js" crossorigin="anonymous"></script>
    <script defer src="./script.js"></script>
    <link rel="stylesheet" href="style.css">
    <title>CacaoTalk</title>

</head>

<body>
    <div class="main-container">
        <form action="insertMsg.php" method="POST">
            <div class="insertContainer">

                <p>
                    <input name="username" id="username" type="text" placeholder="Enter your name..." />
                </p>
                <p>
                    <input name="message" id="message" type="text" placeholder="Enter your message here...." />
                </p>
                <p>
                    <button id='submit' type="submit">Send</button>
                    <button id='refresh' type="refresh">Refresh</button><!-- if inside the form use e.preventDefault in JS -->
                    <button id='showMore' type="showMore">Show More</button>
                </p>
            </div>
            <!-- 10, 20, ALL radio buttons -->
            <!-- <input type="radio" name="radio" id="ten" value="ten" />  -->
            <!-- (isset($_COOKIE['theme']) and $_COOKIE['theme'] == "light") ? "checked" : "" -->
            <!-- <label for="ten">10</label>
            <input type="radio" name="radio" id="twenty" value="twenty" />
            <label for="twenty">20</label>
            <input type="radio" name="radio" id="all" value="all" />
            <label for="all">All</label> -->
        </form>
        <div class="container">
            <?php
            include "getMessages.php";
            // try { //try-catch block
            //     $db = new PDO('mysql:host=localhost;dbname=wcoding;charset=utf8', 'root', '');
            // } catch (Exception $e) {
            //     die('Error:' . $e->getMessage());
            // }

            // $response = $db->query('SELECT id, username, message, date_created FROM CacaoTalk');
            // while ($message = $response->fetch(PDO::FETCH_OBJ)) {
            //     include 'messageView.php';
            // }
            ?>
        </div>
    </div>
</body>

</html>
<!--  

    // CacaoTalk PseudoCode
    /*
    1. Create a form action="insertMsg.php" method="POST" 0
    2. Create 2 inputs 0
    a. username 0
    b. message 0
    3. Create a submit button 0
    
    4. Create a div container to hold messages 0 
    5. Connet to the DB 0
    6. SELECT all the messages from the table 0
    7. fetch WHILE looping 0 
    8. insert messageView.php 0 
    
    
    */
-->