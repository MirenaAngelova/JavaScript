function fruitCocktails([fruit, size, orderedDrinks]) {
    fruit = fruit.toString().substring(0, 1);
    size = size.toString().substring(0, 1);
    orderedDrinks = Number(orderedDrinks);

    let bigSmall = size == 's' ? 2 : 5;
    let price = Number(0);

    switch (fruit) {
        case 'W':
            price = size == 's' ? 56 : 28.70;
            break;
        case 'M':
            price = size == 's' ? 36.66 : 19.60;
            break;
        case 'P':
            price = size == 's' ? 42.10 : 24.80;
            break;
        case 'R':
            price = size == 's' ? 20 : 15.20;
            break;
    }

    let priceTotal = price * bigSmall * orderedDrinks;

    if (priceTotal > 400 && priceTotal <= 1000) {
        priceTotal -= priceTotal * 15 / 100;
    } else if (priceTotal > 1000) {
        priceTotal -= priceTotal * 50 / 100;
    }

    console.log(`${priceTotal.toFixed(2)} lv.`);
}

fruitCocktails(['Watermelon', 'big', '4']);
fruitCocktails(['Pineapple', 'small', '1']);