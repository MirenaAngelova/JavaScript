function bonusScore([n]) {
    n = Number(n);
    let lastDigit = n.toString().slice(-1);
    let bonus = Number(0);

    if (n <= 100) {
        bonus = 5;

    } else if (n >= 1000) {
        bonus = n * 10 / 100;

    } else {
        bonus = n * 20 / 100;
    }

    if (n % 2 == 0) {
        bonus += 1;
    }

    if (lastDigit == 5) {
        bonus += 2;
    }

    console.log(bonus);
    console.log(n + bonus);
}
bonusScore(['20']);
bonusScore(['175']);
bonusScore(['2703']);
bonusScore(['15875']);