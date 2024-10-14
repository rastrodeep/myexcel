// פונקציה לשליחת ההודעה ל-WhatsApp מהטופס הראשי
function sendToWhatsApp() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // יצירת הודעה בפורמט נכון ל-WhatsApp
    var fullMessage = `שם: ${name}%0Aטלפון: ${phone}%0Aאימייל: ${email}%0Aמהות הפניה: ${message}`;

    // הכנס את מספר ה-WhatsApp שלך כאן בפורמט בינלאומי (ללא מקפים, רווחים או סימנים)
    var whatsappURL = `https://wa.me/972508838731?text=${fullMessage}`;

    // פתיחת WhatsApp בחלון חדש
    window.open(whatsappURL, '_blank');
}

// פונקציה לפתיחת המודל של השירות הנבחר
function openModal(serviceName) {
    document.getElementById('service-name').innerText = serviceName; // עדכון שם השירות במודל
    document.getElementById('modal').style.display = 'flex'; // הצגת המודל
}

// פונקציה לסגירת המודל
function closeModal() {
    document.getElementById('modal').style.display = 'none'; // הסתרת המודל
}

// פונקציה לשליחת ההודעה ל-WhatsApp מתוך המודל
function sendModalToWhatsApp() {
    var name = document.getElementById('modalName').value;
    var phone = document.getElementById('modalPhone').value;
    var email = document.getElementById('modalEmail').value;
    var message = document.getElementById('modalMessage').value;

    // יצירת הודעה מותאמת ל-WhatsApp מתוך המודל
    var fullMessage = `שם: ${name}%0Aטלפון: ${phone}%0Aאימייל: ${email}%0Aמהות הפניה: ${message}`;

    // הכנס את מספר ה-WhatsApp שלך כאן בפורמט בינלאומי
    var whatsappURL = `https://wa.me/972508838731?text=${fullMessage}`;

    // פתיחת WhatsApp בחלון חדש
    window.open(whatsappURL, '_blank');

    // סגירת המודל לאחר השליחה
    closeModal();
}

// הפעלת לחצן הסגירה של המודל
document.querySelector('.close-btn').addEventListener('click', closeModal);

// הפעלת המודל כאשר לוחצים על אחד השירותים
document.querySelectorAll('.service-box').forEach(function (element) {
    element.addEventListener('click', function () {
        var serviceName = element.getAttribute('data-service');
        openModal(serviceName);
    });
});
