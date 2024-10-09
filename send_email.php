<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone = $_POST['phone'];

    $to = "leads@example.com"; // שנה לכתובת המייל שלך
    $subject = "פנייה חדשה מהאתר";
    $message = "שם מלא: " . $name . "\nמספר טלפון: " . $phone;
    $headers = "From: no-reply@brilon.com";

    mail($to, $subject, $message, $headers);

    echo "הפרטים נשלחו בהצלחה!";
}
?>
