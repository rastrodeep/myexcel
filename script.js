function sendToWhatsApp() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var fullMessage = `שם: ${name}%0Aטלפון: ${phone}%0Aאימייל: ${email}%0Aמהות הפניה: ${message}`;
    var whatsappURL = `https://wa.me/972501234567?text=${fullMessage}`;
    window.open(whatsappURL, '_blank');
}

function openModal(serviceName) {
    document.getElementById('service-name').innerText = serviceName;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function sendModalToWhatsApp() {
    var name = document.getElementById('modalName').value;
    var phone = document.getElementById('modalPhone').value;
    var email = document.getElementById('modalEmail').value;
    var message = document.getElementById('modalMessage').value;
    var fullMessage = `שם: ${name}%0Aטלפון: ${phone}%0Aאימייל: ${email}%0Aמהות הפניה: ${message}`;
    var whatsappURL = `https://wa.me/972501234567?text=${fullMessage}`;
    window.open(whatsappURL, '_blank');
    closeModal();
}

document.querySelector('.close-btn').addEventListener('click', closeModal);

document.querySelectorAll('.service-box').forEach(function (element) {
    element.addEventListener('click', function () {
        var serviceName = element.getAttribute('data-service');
        openModal(serviceName);
    });
});
