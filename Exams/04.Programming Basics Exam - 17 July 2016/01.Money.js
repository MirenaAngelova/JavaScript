function money([btc, cny, commission]) {
    btc = parseInt(btc);
    cny = parseFloat(cny);
    commission = parseFloat(commission);

    let bgn = parseFloat(btc * 1168 + cny * 0.15 * 1.76);
    let eur = parseFloat(bgn / 1.95);

    let moneyAll = eur * (1 - commission / 100);

    console.log(moneyAll.toFixed(2));
}

money(['1', '5', '5']);
money(['20', '5678', '2.4']);