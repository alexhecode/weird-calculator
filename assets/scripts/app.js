/* eslint-disable no-console */
/* eslint-disable no-undef */
const defaultResult = 0;
let currentResult = defaultResult;
const logEntries = [];

// retrieves the user input
function getUserInputNumber() {
        // eslint-disable-next-line no-undef
        return parseInt(userInput.value);
}

// generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, resultAfterCalc) {
        const calculation = `${resultBeforeCalc} ${operator} ${resultAfterCalc}`;
        // eslint-disable-next-line no-undef
        outputResult(currentResult, calculation); // from vendor file
}

// writes calculations in console log
function writeToLog(prevResult, operationIdentifier, operationNumber, newResult) {
        const logEntry = {
                prevNumber: prevResult,
                operation: operationIdentifier,
                operand: operationNumber,
                result: newResult,
        };
        logEntries.push(logEntry);
        console.log(logEntry.operation);
        console.log(logEntries);
}

function calculateResult(calculationType) {
        // if calculationType is not supported, there is no sense in continuing with this function
        const enteredNumber = getUserInputNumber();

        if (
                (calculationType !== 'ADD' &&
                        calculationType !== 'SUBTRACT' &&
                        calculationType !== 'MULTIPLY' &&
                        calculationType !== 'DIVIDE') ||
                !enteredNumber
        ) {
                return;
        }

        const initialResult = currentResult;
        let mathOperator;

        if (calculationType === 'ADD') {
                currentResult += enteredNumber;
                mathOperator = '+';
        } else if (calculationType === 'SUBTRACT') {
                currentResult -= enteredNumber;
                mathOperator = '-';
        } else if (calculationType === 'MULTIPLY') {
                currentResult *= enteredNumber;
                mathOperator = '×';
        } else if (calculationType === 'DIVIDE') {
                currentResult /= enteredNumber;
                mathOperator = '÷';
        }

        createAndWriteOutput(mathOperator, initialResult, enteredNumber);
        writeToLog(initialResult, calculationType, enteredNumber, currentResult);
}

// addition function
function addition() {
        calculateResult('ADD');
}

// subtraction function
function subtraction() {
        calculateResult('SUBTRACT');
}

// multiplication function
function multiplication() {
        calculateResult('MULTIPLY');
}

// division function
function division() {
        calculateResult('DIVIDE');
}

// clear function
function clear() {
        userInput.value = '';
}

// assign function to click event listener
// eslint-disable-next-line no-undef
addBtn.addEventListener('click', addition);
subtractBtn.addEventListener('click', subtraction);
multiplyBtn.addEventListener('click', multiplication);
divideBtn.addEventListener('click', division);
clearBtn.addEventListener('click', clear);
