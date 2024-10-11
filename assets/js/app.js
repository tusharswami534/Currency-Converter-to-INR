const fromCurrencySelect = document.getElementById('fromCurrency');
const amountInput = document.getElementById('amount');
const resultDiv = document.getElementById('result');

const exchangeRates = {
    USD: 83.96, 
    EUR: 88.72,
    GBP: 102.52,
    JPY: 0.56,
    AUD: 55.24,
    CAD: 61.35,
    CHF: 90.50,
    NZD: 50.25
};

amountInput.addEventListener('input', () => {
    setTimeout(() => {
        const amount = parseFloat(amountInput.value);
        const fromCurrency = fromCurrencySelect.value;

        if (amount <= 0 || isNaN(amount)) {
            resultDiv.textContent = '';
            return;
        }

        const rateToINR = exchangeRates[fromCurrency];
        const convertedAmount = (amount * rateToINR).toFixed(2);
        resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount} INR`;
    }, 1); // 1 ms delay
});
