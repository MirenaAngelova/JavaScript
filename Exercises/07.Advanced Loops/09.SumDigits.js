function sumDigits(n) {
    let len = n.toString().length;
    let sDigit = Number(0);
    sum(n, len, sDigit);

    function sum(num, len, sDigit) {
        num = Number(num);

        if (len == 0) {
            console.log(sDigit);
            return;
        } else {
            let digit = modulusTen(num);
            sDigit += digit;
            num = divisionTen(num);
            len--
            sum(num, len, sDigit);
        }
    }

    function modulusTen(num) {
        return num % 10;
    }

    function divisionTen(num) {
        return parseInt(num / 10);
    }
}
sumDigits(5634);
sumDigits(19);
sumDigits(5);
sumDigits(17151);