<?php

   define("DB_HOST", "localhost");
   define("DB_ROOT", "root");
   define("DB_PASS", "");
   define("DB_NAME", "barkomatic");
   
    $con = mysqli_connect(DB_HOST, DB_ROOT, DB_PASS, DB_NAME);
    if (!$con) {
        die("Connection failed: " . mysqli_connect_error());
    }
?>