<!-- 
    1. Write the HTML for a single comment
    2. If $message->id is EVEN, % 2 create a left-side comment
    3. If $message->id is ODD, % 3 create a right-side comment
    4. Echo the php data from the DB for that comment
        a. message
        b. username
        c. date & time 
    
        === strict equality
        ==  loose equality
 
    -->
<?php
if ($message->id % 2 === 0) {
?>
    <div class="left">
        <i class="fa-solid fa-user-ninja"></i>
        <div class="leftBox">
            <h4><?= $message->id ?></h4>
            <h2><?= $message->message ?></h2>
        </div>
        <div class="nameTime">
            <h4><?= $message->username ?></h4>
            <h4><?= $message->date_created ?></h4>
        </div>
    </div>

<?php
} else {
?>
    <div class="right">
        <i class="fa-solid fa-user-ninja"></i>
        <div class="rightBox">
            <h4><?= $message->id ?></h4>
            <h2><?= $message->message ?></h2>
        </div>
        <div class="nameTime">
            <h4><?= $message->username ?></h4>
            <h4><?= $message->date_created ?></h4>
        </div>
    </div>

<?php
}

?>