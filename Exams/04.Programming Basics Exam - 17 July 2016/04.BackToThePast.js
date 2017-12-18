function backToThePast([inheritedMoney, yearToLive]) {
    inheritedMoney = parseFloat(inheritedMoney);
    yearToLive = Number(yearToLive);
    let n = yearToLive - 1800;
    let spendMoney = 0;
    let age = 18;

    for (var i = 0; i <= n; i++) {

        if (i % 2 == 0) {
            spendMoney += 12000;
        } else {
            spendMoney += 12000 + 50 * age
        }

        age++;
    }

    let diff = spendMoney - inheritedMoney;
    if (diff > 0) {
        console.log(`He will need ${diff.toFixed(2)} dollars to survive.`);
    } else {
        console.log(`Yes! He will live a carefree life and will have ${(Math.abs(diff)).toFixed(2)} dollars left.`);
    }
}

backToThePast(['50000', '1802']);
backToThePast(['100000.15', '1808']);