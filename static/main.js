const submitEnrollBtn = document.querySelector('.submit-Enroll-Btn');
const nameInput = document.querySelector('.name-input');
const surnameInput = document.querySelector('.surname-input');
const birthdayInput = document.querySelector('.birthday-input');
const emailInput = document.querySelector('.email-input');
const workPhoneCheck = document.querySelector('.work-phone-check');
const homePhoneCheck = document.querySelector('.home-phone-check');
const phoneInput = document.querySelector('.phone-input');
const onlineMode = document.querySelector('.online-mode-check');
const offlineMode = document.querySelector('.inPerson-mode-check');


submitEnrollBtn?.addEventListener('click', () => {
    const userData = {
        userName: nameInput.value,
        userSurname: surnameInput.value,
        userBirthday: birthdayInput.value,
        userEmail: emailInput.value,
        userWorkPhonecheck: workPhoneCheck.value,
        userhomePhoneCheck: homePhoneCheck.value,
        userphone: phoneInput.value,
        onlineModepreference: onlineMode.value,
        inPersonModePreference: offlineMode.value

    }
    console.log(userData);
    fetch('/enroll', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    }).then(response => response.json())
        .then(data => alert(data.message));
})