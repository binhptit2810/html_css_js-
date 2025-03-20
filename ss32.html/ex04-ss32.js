function checkEmail() {
    let emailInput = document.getElementById('emailInput');
    let email = emailInput.value.trim();
    let result = document.getElementById('result');
    let isValid = true;
    if(!email.includes('@')){
        isValid = false;
    }
    let lastFourChars = ''
    if (email.length >= 4) {
        lastFourChars = email.slice(email.length - 4, email.length);
    }
    let lastThreeChars = ''
    if (email.length >= 3){
        lastThreeChars = email.slice(email.length - 3, email.length);
    }
    if (lastFourChars !== '.com' && lastThreeChars !== '.vn') {
        isValid = false;
    }
    if(isValid){
        result.textContent = 'email hợp lệ!';
        result.className = 'valid';
    }else{
        result.textContent = 'email không hợp lệ!';
        result.className = 'invalid';
    }
}