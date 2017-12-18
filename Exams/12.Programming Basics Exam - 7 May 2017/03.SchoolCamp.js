function schoolCamp([season, gender, pupils, nights]) {
    season = season.toString().substring(0, 2);
    gender = gender.toString().substring(0, 1);
    pupils = Number(pupils);
    nights = Number(nights);

    let price = Number(0);
    let sport = '';

    if (season == 'wi') {
        switch (gender) {
            case 'g':
                sport = 'Gymnastics';
                price = 9.6;
                break;
            case 'b':
                sport = 'Judo';
                price = 9.6;
                break;
            case 'm':
                sport = 'Ski';
                price = 10;
                break;
        }
    } else if (season == 'sp') {
        switch (gender) {
            case 'g':
                sport = 'Athletics';
                price = 7.2;
                break;
            case 'b':
                sport = 'Tennis';
                price = 7.2;
                break;
            case 'm':
                sport = 'Cycling';
                price = 9.5;
                break;
        }
    } else {
        switch (gender) {
            case 'g':
                sport = 'Volleyball';
                price = 15;
                break;
            case 'b':
                sport = 'Football';
                price = 15;
                break;
            case 'm':
                sport = 'Swimming';
                price = 10;
                break;
        }
    }

    price *= pupils * nights;
    if (pupils >= 50) {
        price -= price * 50 / 100;
    } else if (pupils >= 20 && pupils < 50) {
        price -= price * 15 / 100;
    } else if (pupils >= 10 && pupils < 20) {
        price -= price * 5 / 100;
    }

    console.log(`${sport} ${price.toFixed(2)} lv.`);
}

schoolCamp(['Spring', 'girls', '20', '7']);
schoolCamp(['Winter', 'mixed', '9', '15']);
schoolCamp(['Summer', 'boys', '60', '7']);
schoolCamp(['Spring', 'mixed', '17', '14']);