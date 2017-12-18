function usdToBgn(usd) {
    usd = Number(usd);

    let bgn = usd * 1.79549;
    bgn = Math.round(bgn * 100) / 100;

    console.log(`${bgn} BGN`);
}

usdToBgn(['20']);
usdToBgn(['100']);
usdToBgn(['12.5']);