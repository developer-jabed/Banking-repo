const cashOutBtn = document.getElementById('cash-out-btn');

cashOutBtn.addEventListener('click', function (event) {
    event.preventDefault();

    // Get input values
    const passwordInput = parseInt(document.getElementById('password-out').value);
    const cashOutAmount = parseFloat(document.getElementById('amount-in').value);
    const mainBalanceElement = parseFloat(document.getElementById('main-amount'));
    const mainBalance = parseFloat(mainBalanceElement.innerText);

    // Debugging log
    console.log(typeof passwordInput);

    // Hardcoded password for validation (improve this for real-world use)
    const VALID_PASSWORD = 1234;

    // Validate password
    if (passwordInput === VALID_PASSWORD) {
        // Validate cash-out amount
        if (!isNaN(cashOutAmount) && cashOutAmount > 0 && cashOutAmount <= mainBalance) {
            // Perform cash-out
            const newBalance = mainBalance - cashOutAmount;
            mainBalanceElement.innerText = newBalance; // Ensure two decimal places
            alert('Cash-out successful! New balance: $' + newBalance.toFixed(2));

            // Reset inputs
            document.getElementById('password-out').value = '';
            document.getElementById('amount-in').value = '';
        } else {
            alert('Invalid cash-out amount');
            console.log(typeof )
        }
    } else {
        alert('Invalid password');
    }
});
