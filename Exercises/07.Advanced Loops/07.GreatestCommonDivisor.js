function gcd(a, b) {
    a = Number(a);
    b = Number(b);
    findDivisor(a, b);

    function findDivisor(firstNum, secondNum) {
        if (secondNum == 0) {
            console.log(firstNum);
            return;
        } else {
            [firstNum, secondNum] = firstModulusSecond(firstNum, secondNum);
            findDivisor(firstNum, secondNum);
        }
    }

    function firstModulusSecond(first, second) {
        let previousSecond = second;
        second = first % second;
        first = previousSecond;
        return [first, second];
    }
}


//gcd(24, 16);
// 
gcd(67, 18);
// gcd(15, 9);
// gcd(100, 88);
// gcd(10, 10);