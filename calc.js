function appendToDisplay(value) {
    document.getElementById('display').value += value;
    } 
function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
        } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}  
function clearDisplay() {
    document.getElementById('display').value = '';
}


function calculateFactorial() {
    try {
        const value = parseFloat(document.getElementById('display').value);
        if (!isNaN(value) && Number.isInteger(value) && value >= 0) {
        let result = 1;
        for (let i = 2; i <= value; i++) {
          result *= i;
        }
        document.getElementById('display').value = result;
        } else {
        document.getElementById('display').value = 'Error';
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}  


function backspace() {
    let displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
} 