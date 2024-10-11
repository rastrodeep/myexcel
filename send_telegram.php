<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // קבלת הנתונים מהטופס
    $name = strip_tags(trim($_POST["name"]));
    $phone = strip_tags(trim($_POST["phone"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = strip_tags(trim($_POST["message"]));

    // טוקן הבוט שלך
    $botToken = "7553570268:AAFjR5PF6oBscnebn9bXyQ_0FOErad9xquE";

    // הצ'אט ID שלך (ה-User ID של הבוט או שלך)
    $chatId = "1920655732"; // זיהוי המשתמש שלך

    // יצירת הודעה שתישלח בטלגרם
    $text = "פניה חדשה מהאתר:\n\n";
    $text .= "שם: $name\n";
    $text .= "טלפון: $phone\n";
    $text .= "אימייל: $email\n";
    $text .= "מהות הפניה: $message\n";

    // הגדרת URL ה-API של Telegram
    $url = "https://api.telegram.org/bot$botToken/sendMessage";

    // יצירת מערך הנתונים שישלחו ל-API של טלגרם
    $postData = [
        'chat_id' => $chatId,
        'text' => $text,
    ];

    // שימוש ב-cURL לשליחת הפניה דרך ה-API של Telegram
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);

    // שליחת הבקשה וקליטת התשובה
    $response = curl_exec($ch);
    curl_close($ch);

    // בדיקת הצלחת השליחה
    if ($response) {
        echo "הטופס נשלח בהצלחה לטלגרם!";
    } else {
        echo "הייתה בעיה בשליחת הטופס לטלגרם.";
    }
} else {
    echo "הייתה בעיה עם שליחת הטופס. נסה שוב.";
}
