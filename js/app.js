function getPin() {
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('got 3 digit and retun again', pin);
        return getPin();
    }
};

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}


// keypad 
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    };

});


// verifying 

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typed = document.getElementById('typed-numbers').value;

    const successMessage = document.getElementById('notify-succeed');
    const failedNotification = document.getElementById('notify-failed');
    if (pin == typed) {
        successMessage.style.display = 'block';
        failedNotification.style.display = 'none';
    }
    else {
        failedNotification.style.display = 'block';
        successMessage.style.display = 'none';
    }
}