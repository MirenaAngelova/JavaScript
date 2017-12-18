function numbersOperations([n1, n2, operator]) {
    n1 = Number(n1);
    n2 = Number(n2);
    let result = 0;
    let evenOdd = '';

    if (n2 == 0 && (operator == '/' || operator == '%')) {
        console.log(`Cannot divide ${n1} by zero`);

    } else if (operator == '/') {
        result = n1 / n2;
        console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);

    } else if (operator == '%') {
        result = n1 % n2;
        console.log(`${n1} % ${n2} = ${result}`);

    } else {

        switch (operator) {
            case '+':
                result = n1 + n2;
                evenOdd = result % 2 == 0 ? 'even' : 'odd';
                console.log(`${n1} + ${n2} = ${result} - ${evenOdd}`);
                break;
            case '-':
                result = n1 - n2;
                evenOdd = result % 2 == 0 ? 'even' : 'odd';
                console.log(`${n1} - ${n2} = ${result} - ${evenOdd}`);
                break;
            case '*':
                result = n1 * n2;
                evenOdd = result % 2 == 0 ? 'even' : 'odd';
                console.log(`${n1} * ${n2} = ${result} - ${evenOdd}`);
                break;
        }
    }
}

numbersOperations(['10', '12', '+']);
numbersOperations(['10', '1', '-']);
numbersOperations(['7', '3', '*']);
numbersOperations(['123', '12', '/']);
numbersOperations(['10', '3', '%']);
numbersOperations(['112', '0', '/']);
numbersOperations(['10', '0', '%']);