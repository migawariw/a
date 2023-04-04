const result = document.getElementById('result');

function clearResult() {
  result.value = '';
}

const ÷ ='/';
const × ='*';

function displayResult(value) {
  result.value += value;
}

function calculateResult() {
  result.value = eval(result.value);
}

document.getElementById('clear').addEventListener('click', clearResult);

document.getElementById('plus-minus').addEventListener('click', () => {
  result.value =-1 * result.value;
});

document.getElementById('percent').addEventListener('click', () => {
result.value = result.value / 100;
});

document.getElementById('divide').addEventListener('click', () => {
displayResult('÷');
});

document.getElementById('7').addEventListener('click', () => {
displayResult('7');
});

document.getElementById('8').addEventListener('click', () => {
displayResult('8');
});

document.getElementById('9').addEventListener('click', () => {
displayResult('9');
});

document.getElementById('multiply').addEventListener('click', () => {
displayResult('×');
});

document.getElementById('4').addEventListener('click', () => {
displayResult('4');
});

document.getElementById('5').addEventListener('click', () => {
displayResult('5');
});

document.getElementById('6').addEventListener('click', () => {
displayResult('6');
});

document.getElementById('minus').addEventListener('click', () => {
displayResult('-');
});

document.getElementById('1').addEventListener('click', () => {
displayResult('1');
});

document.getElementById('2').addEventListener('click', () => {
displayResult('2');
});

document.getElementById('3').addEventListener('click', () => {
displayResult('3');
});

document.getElementById('plus').addEventListener('click', () => {
displayResult('+');
});

document.getElementById('0').addEventListener('click', () => {
displayResult('0');
});

document.getElementById('dot').addEventListener('click', () => {
displayResult('.');
});

document.getElementById('equal').addEventListener('click', calculateResult);
