function factorial(n) {
    let factorialFinal = recurciveFactorial(n);
    console.log(factorialFinal);

    function recurciveFactorial(n) {
        if (n == 1) {
            return 1;
        } else {
            return n * recurciveFactorial(n - 1);
        }
    }
}
factorial(5);
factorial(6);
factorial(10);
factorial(1);
factorial(2);