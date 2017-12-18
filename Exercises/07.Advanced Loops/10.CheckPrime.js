function checkPrime(n) {
    let count = parseInt(Math.sqrt(n));
    isPrime(n);

    function isPrime(n) {
        if (n < 2) {
            console.log(`Not Prime`);
            return;
        } else {
            checkN(n);
        }
    }

    function checkN(n) {

        if (count == 1) {
            console.log(`Prime`);
            return;
        } else {
            if (n % count == 0) {
                console.log(`Not Prime`);
                return;
            } else {
                count--;
                checkN(n)
            }
        }
    }
}
checkPrime(2);
checkPrime(3);
checkPrime(4);
checkPrime(5);
checkPrime(7);
checkPrime(1);
checkPrime(0);
checkPrime(-1);
checkPrime(149);