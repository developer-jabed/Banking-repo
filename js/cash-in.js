const cashInBtn = document.getElementById('cash-in-btn');
const passwordIn = document.getElementById('password-in');
    
    cashInBtn.addEventListener('click', function (event) {
        event.preventDefault();
        
    
        // Check if the password is correct
        if (passwordIn.value === "1") { // Assuming "1" is the correct password
            const mainBalanceElement = document.getElementById('main-amount');
            const mainBalance = parseFloat(mainBalanceElement.innerText);
            const cashInAmount = parseFloat(document.getElementById('amount-in').value);
    
            // Check if cashInAmount is valid
            if (!isNaN(cashInAmount)) {
                const newBalance = mainBalance + cashInAmount;
                mainBalanceElement.innerText = newBalance; 
                cashInField.value = ''; 
                passwordIn.value = '';
            } else {
                console.error('Invalid cash-in amount');
            }
        } else {
            console.error('Incorrect password');
        }
    });
    