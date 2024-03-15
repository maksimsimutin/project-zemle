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
  