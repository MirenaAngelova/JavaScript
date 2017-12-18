function triangleOfDollars([n]) {
    n = Number(n);
    i = Number(1);
    while (i <= n) {
        console.log('$ '.repeat(i - 1) + '$');
        i++;
    }
}
triangleOfDollars(['3']);
triangleOfDollars(['6']);
triangleOfDollars(['7']);