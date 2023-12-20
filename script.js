let currentIndex = 0;
const reviewsContent = document.querySelectorAll('.reviews__content');
const circles = document.querySelectorAll('.circle');

function showReview(index) {
    for (let i = 0; i < reviewsContent.length; i++) {
        reviewsContent[i].style.display = 'none';
        circles[i].classList.remove('active');
    }
    reviewsContent[index].style.display = 'block';
    circles[index].classList.add('active');
}

function nextReview() {
    currentIndex = (currentIndex + 1) % reviewsContent.length;
    showReview(currentIndex);
}

function prevReview() {
    currentIndex = (currentIndex - 1 + reviewsContent.length) % reviewsContent.length;
    showReview(currentIndex);
}

document.querySelector('.right').addEventListener('click', nextReview);
document.querySelector('.left').addEventListener('click', prevReview);

// Переключение слайдов при нажатии на круги
circles.forEach((circle, index) => {
    circle.addEventListener('click', () => {
        currentIndex = index;
        showReview(currentIndex);
    });
});

// Показать первый отзыв при загрузке страницы
showReview(currentIndex);





document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.reservation__form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Получение значений полей формы
        const email = document.getElementById('email').value;
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const comment = document.getElementById('comment').value;

        // Простая валидация почты
        if (!validateEmail(email)) {
            alert('Пожалуйста, введите корректный адрес электронной почты.');
            return;
        }

        // Простая валидация имени (не пустое поле)
        if (name.trim() === '') {
            alert('Пожалуйста, введите ваше имя.');
            return;
        }

        // Простая валидация номера телефона
        if (!validatePhoneNumber(phone)) {
            alert('Пожалуйста, введите корректный номер телефона.');
            return;
        }

        // Простая валидация комментария (не пустое поле)
        if (comment.trim() === '') {
            alert('Пожалуйста, введите комментарий.');
            return;
        }

        // Очистка полей формы после успешной отправки
        document.getElementById('email').value = '';
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('comment').value = '';

        // Уведомление об успешной регистрации
        alert('Спасибо! Ваша заявка успешно отправлена.');
    });

    // Функция для проверки корректности ввода адреса электронной почты
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(String(email).toLowerCase());
    }

    // Функция для проверки корректности номера телефона
    function validatePhoneNumber(phone) {
        const re = /^(\+?7|8)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
        return re.test(phone.replace(/\D/g, '')) && phone.replace(/\D/g, '').length >= 11;
    }
});


function scrollToRegistration() {
    const registrationForm = document.getElementById('registrationForm');
    registrationForm.scrollIntoView({ behavior: 'smooth' });
}
