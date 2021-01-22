let password = document.querySelector('input');
let params = document.querySelectorAll('p');

function isCapital(ch) {
    return (ch.charCodeAt() >= 65 && ch.charCodeAt() <= 90);
}

function isLowercase(ch) {
    return (ch.charCodeAt() >= 97 && ch.charCodeAt() <= 122);
}

function isDigit(ch) {
    return (ch.charCodeAt() >= 48 && ch.charCodeAt() <= 57);
}

function isSpecialChar(ch) {
    return (!isCapital(ch) && !isLowercase(ch) && !isDigit(ch));
}

function checkLength() {
    return (password.value.length >= 8);
}

function checkCap() {
    let flag = false;
    for (let i = 0; i < password.value.length; i++) {
        if (isCapital(password.value.charAt(i))) flag=true; 
    }
    return flag;
}

function checkLower() {
    let flag = false;
    for (let i = 0; i < password.value.length; i++) {
        if (isLowercase(password.value.charAt(i))) flag=true; 
    }
    return flag;
}

function checkDigit() {
    let flag = false;
    for (let i = 0; i < password.value.length; i++) {
        if (isDigit(password.value.charAt(i))) flag=true; 
    }
    return flag;
}

function checkSpecial() {
    let flag = false;
    for (let i = 0; i < password.value.length; i++) {
        if (isSpecialChar(password.value.charAt(i))) flag=true; 
    }
    return flag;
}

function checkParam(el) {
    switch(el.dataset.param) {
        case 1:
        case "1":
            return checkLength();
        case 2:
        case "2":
            return checkCap();
        case 3:
        case "3":
            return checkLower();
        case 4: 
        case "4":
            return checkDigit();
        case 5: 
        case "5":
            return checkSpecial();
        default:
            throw "An unknown error has occurred.";
    }
}

function handleChange() {
    params.forEach(p => {
        if (checkParam(p)) {
            if(p.classList.contains('pass')) {
                return;
            } else {
                p.classList.add('pass');
                p.querySelector('.icon-container').textContent = '+';
            }
        } else {
            if(!p.classList.contains('pass')) {
                return;
            } else {
                p.classList.remove('pass');
                p.querySelector('.icon-container').textContent = '-';
            }
        }
    });
}

password.addEventListener('change',handleChange);
password.addEventListener('keyup',handleChange);