// אפקט הופעת הכותרת הראשית עם אנימציה
document.addEventListener('DOMContentLoaded', function() {
    const headerTitle = document.querySelector('header h1');

    // אנימציה של הופעת הכותרת
    headerTitle.style.opacity = 0;
    headerTitle.style.transform = 'translateY(-50px)';

    setTimeout(() => {
        headerTitle.style.transition = 'all 1s ease-out';
        headerTitle.style.opacity = 1;
        headerTitle.style.transform = 'translateY(0)';
    }, 500); // דיליי קצר לפני ההופעה

    // אנימציית שינוי צבע מחזורית
    setInterval(() => {
        headerTitle.style.transition = 'color 1s ease-in-out';
        headerTitle.style.color = headerTitle.style.color === '#00A4EF' ? '#F0F6FC' : '#00A4EF';
    }, 2000); // שינוי צבע כל 2 שניות
});

// אפקט גלילה להופעת אלמנטים (למשל מי אני, למה ללמוד איתי)
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal'); // בחירת האלמנטים עם המחלקה 'reveal'

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100; // מרחק הנראה עבור האלמנט להתחיל להופיע

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active'); // הוספת המחלקה 'active' כאשר האלמנט נראה
        } else {
            reveals[i].classList.remove('active'); // הסרת המחלקה 'active' כאשר האלמנט יוצא מהטווח
        }
    }
}

// הוספת מאזין לאירוע גלילה להפעלת הפונקציה
window.addEventListener('scroll', revealOnScroll);

// פתיחת המודל רק בלחיצה על שירותים
document.querySelectorAll('.service-box').forEach(function(box) {
    box.addEventListener('click', function() {
        const modal = document.getElementById('modal');
        const serviceName = this.getAttribute('data-service'); // מקבל את שם השירות מהקופסה שנלחצה
        document.getElementById('service-name').textContent = serviceName; // שם השירות מופיע במודל
        modal.style.display = 'flex'; // מציג את המודל רק בלחיצה
    });
});

// סגירת המודל כאשר לוחצים על כפתור הסגירה
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none'; // סגירת המודל
});

// סגירת המודל כאשר לוחצים מחוץ למודל
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none'; // סגירת המודל כאשר לוחצים מחוץ לו
    }
});

// אפקט hover לכפתור השליחה בטופס במודל
const submitButton = document.querySelector('input[type="submit"]');
submitButton.addEventListener('mouseover', function() {
    submitButton.style.transform = 'scale(1.05)';
    submitButton.style.transition = 'transform 0.3s ease';
});
submitButton.addEventListener('mouseout', function() {
    submitButton.style.transform = 'scale(1)';
});

// ולידציה ושליחת הטופס במודל
document.getElementById('modalForm').addEventListener('submit', function(event) {
    event.preventDefault(); // מניעת רענון של הדף בעת שליחת הטופס
    const name = document.getElementById('modalName').value;
    const email = document.getElementById('modalEmail').value;
    const phone = document.getElementById('modalPhone').value;

    // בדיקה פשוטה אם כל השדות מלאים (אפשר להוסיף ולידציה מתקדמת)
    if (name && email && phone) {
        alert('פרטיך נשלחו בהצלחה!'); // הודעת הצלחה לאחר שליחת הטופס
        document.getElementById('modal').style.display = 'none'; // סגירת המודל לאחר השליחה
    } else {
        alert('אנא מלא את כל השדות הנדרשים.');
    }
});
