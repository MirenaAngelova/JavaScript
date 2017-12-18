function digitsToText([digit]) {
    digit = Number(digit);
    let digits = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    if (parseInt(digit / 10) == 0 && digit != 0) {
        console.log(digits[digit - 1]);

    } else {
        console.log(`number too big`)
    }
}

digitsToText(['5']);
digitsToText(['1']);
digitsToText(['9']);
digitsToText(['10']);