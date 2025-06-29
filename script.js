const inputNumber = document.getElementById('inputNumber');
const result = document.querySelector('.result');
const button = document.querySelector('.btn');

function calculateDiscount() {
    const inputValue = inputNumber.value;
    const percent = (inputValue * 15 / 100).toFixed(0);
    const overall = inputValue - percent;
    result.innerHTML = `Со скидкой: <br>${overall} сом`;
}

button.addEventListener('click', calculateDiscount);

inputNumber.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        calculateDiscount();
    }
});