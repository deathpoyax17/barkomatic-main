<?php
   // Product information
   include_once '../modules/config.php';
   $itemName = 'Membership_subscription';
   $itemNumber = 'MS123456';
   session_start();

   $ship_id = isset($_SESSION['ship_id']);
   // Subscription price for one month
   $itemPrice = 1500.00;
     
   // PayPal configuration 
   define('PAYPAL_ID', 'williamdoe@shiplines.com'); 
   define('PAYPAL_SANDBOX', TRUE); //TRUE or FALSE 
    
   define('PAYPAL_RETURN_URL', 'https://0489-202-175-242-179.ngrok.io/barkomatic-main/paypal/success.php'); 
   define('PAYPAL_CANCEL_URL', 'https://0489-202-175-242-179.ngrok.io/barkomatic-main/paypal/cancel.php'); 
   define('PAYPAL_NOTIFY_URL', 'https://0489-202-175-242-179.ngrok.io/barkomatic-main/modules/schedule/paypal_ipn.php?shp_id="'.$ship_id.'"'); 
   define('PAYPAL_CURRENCY', 'PHP'); 
    
    
   
    define('PAYPAL_URL', (PAYPAL_SANDBOX == true)?"https://www.sandbox.paypal.com/cgi-bin/webscr":"https://www.paypal.com/cgi-bin/webscr");


?>