function truckDriver([season, km]) {
    season = season.toString().substring(0, 2);
    let money = Number(0);
    if (season == 'Au') {
        season = 'Sp';
    }

    if (km <= 5000) {
        switch (season) {
            case 'Sp':
                money = km * 0.75;
                break;
            case 'Su':
                money = km * 0.90;
                break;
            case 'Wi':
                money = km * 1.05;
                break;
        }
    } else if (km > 5000 && km <= 10000) {
        switch (season) {
            case 'Sp':
                money = km * 0.95;
                break;
            case 'Su':
                money = km * 1.10;
                break;
            case 'Wi':
                money = km * 1.25;
                break;
        }
    } else {
        money = km * 1.45;
    }

    money *= 4;
    money -= money * 10 / 100;
    console.log(money.toFixed(2));
}

truckDriver(['Summer', '3455']);
truckDriver(['Winter', '4350']);
truckDriver(['Spring', '1600']);
truckDriver(['Winter', '5678']);
truckDriver(['Autumn', '8600']);
truckDriver(['Winter', '16042']);
truckDriver(['Spring', '16942']);