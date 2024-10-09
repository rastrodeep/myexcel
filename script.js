// פונקציית אנימציה לכותרת הראשית
document.addEventListener('DOMContentLoaded', function() {
    const headerTitle = document.querySelector('header h1');
    
    // אפקט הופעת הכותרת
    headerTitle.style.opacity = 0;
    headerTitle.style.transform = 'translateY(-50px)';
    
    // הוספת אנימציה לאחר טעינת הדף
    setTimeout(() => {
        headerTitle.style.transition = 'all 1s ease-out';
        headerTitle.style.opacity = 1;
        headerTitle.style.transform = 'translateY(0)';
        headerTitle.style.color = '#00A4EF'; // שינוי צבע לכחול בהיר
    }, 500); // דיליי קל להופעה

    // אנימציית שינוי צבע מחזורית
    setInterval(() => {
        headerTitle.style.transition = 'color 1s ease-in-out';
        headerTitle.style.color = headerTitle.style.color === '#00A4EF' ? '#F0F6FC' : '#00A4EF';
    }, 2000); // שינוי כל 2 שניות
});

// פונקציה שמציגה את האלמנטים בהדרגה כאשר גוללים למטה עם אנימציה חלקה
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

// אפקט hover לכפתור השליחה
const submitButton = document.querySelector('input[type="submit"]');
submitButton.addEventListener('mouseover', function() {
    submitButton.style.transform = 'scale(1.05)';
    submitButton.style.transition = 'transform 0.3s ease';
});
submitButton.addEventListener('mouseout', function() {
    submitButton.style.transform = 'scale(1)';
});

// הפעלת האפקטים כאשר הדף נטען
revealOnScroll();
