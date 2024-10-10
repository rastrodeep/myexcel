<?php
// בדוק אם הטופס נשלח
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // קבלת נתוני הטופס
    $name = strip_tags(trim($_POST["modalName"]));
    $email = filter_var(trim($_POST["modalEmail"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST["modalPhone"]));
    $message = strip_tags(trim($_POST["modalMessage"]));

    // בדיקה אם השדות ריקים
    if (empty($name) || empty($phone) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($message)) {
        http_response_code(400);
        echo "יש למלא את כל השדות בצורה נכונה.";
        exit;
    }

    // כתובת המייל שאליה תשלח ההודעה
    $to = "lior@brilon.co.il";
    
    // נושא המייל
    $subject = "New Lead From Excel Site";

    // גוף ההודעה
    $email_content = "שם מלא: $name\n";
    $email_content .= "אימייל: $email\n";
    $email_content .= "טלפון: $phone\n\n";
    $email_content .= "מהות הפניה:\n$message\n";

    // כותרות המייל (מוגדרות כראוי כדי להציג את השולח)
    $headers = "From: $name <$email>";

    // שליחת המייל
    if (mail($to, $subject, $email_content, $headers)) {
        http_response_code(200);
        echo "ההודעה נשלחה בהצלחה!";
    } else {
        http_response_code(500);
        echo "אירעה שגיאה בשליחת ההודעה, אנא נסה שנית.";
    }

} else {
    http_response_code(403);
    echo "יש גישה לא תקינה לטופס זה.";
}
?>
