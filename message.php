<?php
// get all values

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

if(!empty($email) && !empty($message)){
    // the input is not empty
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){ 
        // if user enter valid email
        $reciever = "hajji20999@gmail.com"; // email recieve
        $subject = "From: $name <$email>"; // subject of the email. looks like from name <example@gmail.com>

        // body of the message 
        $body = "Name: $name\nEmail: $email\nMessage: $message\n";
        $sender = "From: $email"; // email sender

        if(mail($reciever, $subject, $body, $sender)){
            //mail() is build php function to send email
            echo "Your message has been sent successfully!";

        }
        else{
            echo "Sorry, failed to send message!";
        }
    }
    else{
        echo "Enter a valid email address!";
    }
}
else{
    echo "Email and message field is required";
}
?>
