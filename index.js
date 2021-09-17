function add(arr) {
    const reducer = (x, y) => x + y;
    return arr.reduce(reducer)
};
function subtract(arr) {
    const reducer = (x, y) => x - y;
    return arr.reduce(reducer)
};
function multiply(arr) {
    const reducer = (x, y) => x * y;
    return arr.reduce(reducer)
};
function divide(arr) {
    const reducer = (x, y) => x / y;
    return arr.reduce(reducer)
};

const btns = document.querySelectorAll('.btn');
const operatorBtns = document.querySelectorAll('[data-smooth]');
const result = document.querySelector('#nums');
const realTime = document.querySelector('h4');
const clear = document.querySelector('#clear');
const equals = document.querySelector('#btn-equals');

function clearDisplay() {
    clear.addEventListener('click', (e) => {
        result.innerText = "";
        realTime.innerHTML = "";
    });
};

function numButs() {
    btns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
                result.innerText += e.target.value;
                realTime.innerHTML += e.target.value;
        });
    });
};

function funkyBtns() {
    operatorBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
                result.innerText = '';
                realTime.innerHTML += ' ' + e.target.value + ' ';
        });
    });
}

numButs();
clearDisplay();
funkyBtns();

// take realTime.innerHTML and convert into an array with .split(' '); set to variable arr;
//  use if statement with .includes() for each operator, it it includes an operator,
// remove that operator, convert numbers to strings, plug those numbers into an operator function

equals.addEventListener('click', () => {
    let arr = realTime.textContent.split(' ');
    let operator = arr.splice(1,1);
    let numArr = [];
    for (let i = 0; i < arr.length; i++) {
        numArr.push(parseInt(arr[i]));
    }
    if (operator == 'x') {
        result.textContent = multiply(numArr);
    }
    if (operator == '/') {
        result.textContent = divide(numArr);
    }
    if (operator == '+') {
        result.textContent = add(numArr);
    }
    if (operator == '-') {
        result.textContent = subtract(numArr);
    }
});