let factorA, factorB, operation;
document.addEventListener ('DOMContentLoaded', () => {
    const oneButton = document.getElementById ('one');
    const twoButton = document.getElementById ('two');
    const threeButton = document.getElementById ('three');
    const fourButton = document.getElementById ('four');
    const fiveButton = document.getElementById ('five');
    const sixButton = document.getElementById ('six');
    const sevenButton = document.getElementById ('seven');
    const eightButton = document.getElementById ('eight');
    const nineButton = document.getElementById ('nine');
    const zeroButton = document.getElementById ('zero');
    const additionButton = document.getElementById ('addition');
    const subtractionButton = document.getElementById ('subtraction');
    const multiplicationButton = document.getElementById ('multiplication');
    const divisionButton = document.getElementById ('division');
    const equalButton = document.getElementById ('equal');
    const resetButton = document.getElementById ('reset');
    const resultContent = document.getElementById ('result');

    oneButton.addEventListener ('click', function () {
        resultContent.textContent = resultContent.textContent + '1';
    });

    twoButton.addEventListener ('click', function () {
        resultContent.textContent = resultContent.textContent + '2';
    });

    threeButton.addEventListener ('click', function () {
        resultContent.textContent = resultContent.textContent + '3';
    });

    fourButton.addEventListener ('click', function () {
        resultContent.textContent = resultContent.textContent + '4';
    });

    fiveButton.addEventListener ('click', function () {
        resultContent.textContent = resultContent.textContent + '5';
    });

    sixButton.addEventListener ('click', function () {
        resultContent.textContent = resultContent.textContent + '6';
    });

    sevenButton.addEventListener ('click', function () {
        resultContent.textContent = resultContent.textContent + '7';
    });

    eightButton.addEventListener ('click', function () {
        resultContent.textContent = resultContent.textContent + '8';
    });

    nineButton.addEventListener ('click', function () {
        resultContent.textContent = resultContent.textContent + '9';
    });

    zeroButton.addEventListener ('click', function () {
        resultContent.textContent = resultContent.textContent + '0';
    });

    resetButton.addEventListener ('click', function () {
        resetTool ();
    });

    additionButton.addEventListener ('click', function () {
        factorA = resultContent.textContent;
        operation = '+';
        cleanTool ();
    });

    subtractionButton.addEventListener ('click', function () {
        factorA = resultContent.textContent;
        operation = '-';
        cleanTool ();
    });

    multiplicationButton.addEventListener ('click', function () {
        factorA = resultContent.textContent;
        operation = '*';
        cleanTool ();
    });

    divisionButton.addEventListener ('click', function () {
        factorA = resultContent.textContent;
        operation = '/';
        cleanTool ();
    });

    equalButton.addEventListener ('click', function () {
        factorB = resultContent.textContent;
        resolveTool ();
    })

    function cleanTool () {
        resultContent.textContent = ' ';
    }
    
    function resetTool () {
        resultContent.textContent = ' ';
        factorA = 0;
        factorB = 0;
        operation = '';
    }
    
    function resolveTool () {
        let result = 0;
        switch (operation) {
            case '+':
                result = parseFloat (factorA) + parseFloat (factorB);
                break;
            case '-':
                result = parseFloat (factorA) - parseFloat (factorB);
                break;
            case '*':
                result = parseFloat (factorA) * parseFloat (factorB);
                break;
            case '/':
                result = parseFloat (factorA) / parseFloat (factorB);
                break;
        }
        resetTool ();
        resultContent.textContent = result;
    }
});

