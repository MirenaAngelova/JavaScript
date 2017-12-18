function gcd(a, b) {
    a = Number(a);
    b = Number(b);
    findDivisor(a, b);

    function findDivisor(firstNum, secondNum) {
        if (secondNum == 0) {
            console.log(firstNum);
            return
        } else {
            let previousSecond = secondNum;
            secondNum = firstNum % secondNum;
            firstNum = previousSecond;
            findDivisor(firstNum, secondNum);
        }
    }
}


//gcd(24, 16);
// 
gcd(67, 18);
// gcd(15, 9);
// gcd(100, 88);
// gcd(10, 10);