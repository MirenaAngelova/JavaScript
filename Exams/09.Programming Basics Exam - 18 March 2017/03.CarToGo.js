function carToGo([budget, season]) {
    budget = Number(budget);
    let seasonFirst = season.substring(0, 1);
    let classType = '';
    let price = Number(0);
    let car = '';

    if (budget <= 100) {
        classType = 'Economy class';
        if (seasonFirst == 'S') {
            price = 35 / 100;
            car = 'Cabrio';
        } else {
            price = 65 / 100;
            car = 'Jeep';
        }

    } else if (budget > 100 && budget <= 500) {
        classType = 'Compact class';
        if (seasonFirst == 'S') {
            price = 45 / 100;
            car = 'Cabrio';
        } else {
            price = 80 / 100;
            car = 'Jeep';
        }

    } else {
        classType = 'Luxury class';
        price = 90 / 100;
        car = 'Jeep';
    }

    price *= budget;
    console.log(classType);
    console.log(car + ' - ' + price.toFixed(2));
}

carToGo(['450', 'Summer']);
carToGo(['450', 'Winter']);
carToGo(['1010', 'Summer']);
carToGo(['99.99', 'Summer']);
carToGo(['1010', 'Winter']);
carToGo(['70.50', 'Winter']);