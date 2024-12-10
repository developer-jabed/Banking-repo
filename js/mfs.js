
const loginBtn = document.getElementById('login-btn');
const closeSection =    document.getElementById('close-btn');
loginBtn.addEventListener('click', function (event) {
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const password = document.getElementById('password-input').value;
    if (phoneNumber === '5' && password === '1') {
        document.getElementById("my-modal-4").showModal();
    }
    else {
        document.getElementById("my-modal-3").showModal();
    }


});

closeSection.addEventListener('click', function (event) {
    
    document.getElementById('main').classList.add('hidden');
    document.getElementById('Banking').classList.remove('hidden');
});
