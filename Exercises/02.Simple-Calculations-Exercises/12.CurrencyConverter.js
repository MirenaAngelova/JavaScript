function currencyConverter([arg1, arg2, arg3]) {
    let count = Number(arg1);
    let rateFirst = 1;
    let rateSecond = 1;
    let converter = 1;
    switch (arg2) {
        case 'EUR':
            rateFirst = 1.95583;
            break;
        case 'USD':
            rateFirst = 1.79549;
            break;
        case 'GBP':
            rateFirst = 2.53405;
            break;
    }
    switch (arg3) {
        case 'EUR':
            rateSecond = 1.95583;
            break;
        case 'USD':
            rateSecond = 1.79549;
            break;
        case 'GBP':
            rateSecond = 2.53405;
            break;
    }

    converter = count * rateFirst / rateSecond;
    converter = Math.round(converter * 100) / 100;
    console.log(`${converter} ${arg3}`);
}

currencyConverter(['20', 'USD', 'BGN']);
currencyConverter(['100', 'BGN', 'EUR']);
currencyConverter(['12.35', 'EUR', 'GBP']);
currencyConverter(['150.35', 'USD', 'EUR']);