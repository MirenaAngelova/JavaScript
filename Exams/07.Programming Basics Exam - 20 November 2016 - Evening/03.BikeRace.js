function bikeRace([junior, senior, layout]) {
    junior = Number(junior);
    senior = Number(senior);

    let length = layout.length;

    let juniorPrice = Number(0);
    let seniorPrice = Number(0);
    let finalPrice = Number(0);

    switch (length) {
        case 5:
            juniorPrice = 5.50;
            seniorPrice = 7;
            break;
        case 13:
            juniorPrice = 8;
            seniorPrice = 9.50;
            if (junior + senior >= 50) {
                juniorPrice -= 8 * 25 / 100;
                seniorPrice -= 9.50 * 25 / 100;
            }
            break;
        case 8:
            juniorPrice = 12.25;
            seniorPrice = 13.75;
            break;
        case 4:
            juniorPrice = 20;
            seniorPrice = 21.50;
            break;
    }

    finalPrice = junior * juniorPrice + senior * seniorPrice;
    finalPrice -= finalPrice * 5 / 100;

    console.log(finalPrice.toFixed(2));
}

bikeRace(['10', '20', 'trail']);
bikeRace(['20', '25', 'cross-country']);
bikeRace(['30', '25', 'cross-country']);
bikeRace(['10', '10', 'downhill']);
bikeRace(['3', '40', 'road']);