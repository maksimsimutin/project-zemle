
/*===КНОПКА СДЕЛАТЬ ЗАКАЗ===*/

document.addEventListener('DOMContentLoaded', function() {
    const myBtn = document.getElementById('myBtn');
    const myModal = document.getElementById('myModal');
    const btnClose = document.querySelector('.btn-close');

    myBtn.addEventListener('click', function() {
        myModal.classList.toggle('is-open');
    });

    btnClose.addEventListener('click', function() {
        myModal.classList.remove('is-open');
    });
});
 
/*===КНОПКА ОТПРАВИТЬ ФОРМУЛУ===*/

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.review-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const userName = formData.get('user-name');
        const userTel = formData.get('user-tel');
        const userEmail = formData.get('user-email');
        const userComment = formData.get('user-comment');

        console.log(`Name: ${userName}, Tel: ${userTel}, Email: ${userEmail}, Comment: ${userComment}`);

        // Отправка данных на сервер с помощью AJAX-запроса
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/submit-form', true);
        xhr.send(formData);

        // Очистка полей формы после отправки
        form.reset();
    });
});