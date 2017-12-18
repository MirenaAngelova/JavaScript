function fibonacci(n) {
    let fib = [];
    let fibN = fibonacciRecursive(n);
    console.log(fibN);

    function fibonacciRecursive(n) {
        if (fib[n] == undefined) {
            if (n == 0 || n == 1) {
                fib[n] = 1;
            } else {
                fib[n] = fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
            }
        }
        return fib[n];
    }
}
fibonacci(0);
fibonacci(1);
fibonacci(2);
fibonacci(5);
fibonacci(10);