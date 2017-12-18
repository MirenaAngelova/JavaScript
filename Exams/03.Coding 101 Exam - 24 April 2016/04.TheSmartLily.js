function theSmartLily([age, priceLaundry, priceToy]) {
    age = Number(age);
    priceLaundry = parseFloat(priceLaundry);
    priceToy = parseFloat(priceToy);
    let startMoney = 10;
    let money = 0;
    let diff = 0;
    let yesNo = '';

    for (let i = 1; i <= age; i++) {
        if (i % 2 == 0) {
            money += startMoney - 1;
            startMoney += 10;
        } else {
            money += priceToy;
        }
    }

    diff = priceLaundry - money;
    yesNo = diff > 0 ? `No! ${diff.toFixed(2)}` : `Yes! ${Math.abs(diff).toFixed(2)}`;

    console.log(yesNo);
}

theSmartLily(['10', '170.00', '6']);
theSmartLily(['21', '1570.98', '3']);