// פונקציה שמציגה את האלמנטים בהדרגה כאשר גוללים למטה
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

// הוספת מאזין לאירוע הגלילה כדי להפעיל את הפונקציה בעת גלילה
window.addEventListener('scroll', revealOnScroll);

// אנימציה לכפתור השליחה כאשר לוחצים עליו
const submitButton = document.querySelector('input[type="submit"]');
submitButton.addEventListener('click', function() {
    submitButton.classList.add('clicked'); // הוספת המחלקה 'clicked' לאפקט
    setTimeout(() => {
        submitButton.classList.remove('clicked'); // הסרת האפקט לאחר 300 מילישניות
    }, 300);
});

// אפקט מעבר עכבר לשינוי צבע הרקע של הגוף
const body = document.body;
const sections = document.querySelectorAll('section'); // בחירת כל הסקשנים

sections.forEach(section => {
    section.addEventListener('mouseover', () => {
        body.style.background = 'linear-gradient(135deg, #FFB900, #7FBA00)'; // שינוי רקע בזמן מעבר עכבר
    });
    section.addEventListener('mouseout', () => {
        body.style.background = 'linear-gradient(135deg, #00A4EF, #FFB900)'; // החזרת הרקע המקורי
    });
});

// הפעלת הפונקציה לגילוי האובייקטים בתחילת הדף
revealOnScroll();

// ווידוי שכל האלמנטים בטווח יתחילו במצב הנכון כשדף נטען מחדש
window.addEventListener('load', revealOnScroll);
