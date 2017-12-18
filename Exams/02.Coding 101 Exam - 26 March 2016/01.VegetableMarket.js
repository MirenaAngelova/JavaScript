function vegetableMarket([vegPrice, fruitPrice, vegQuantity, fruitQuantity]) {
    vegPrice = parseFloat(vegPrice);
    fruitPrice = parseFloat(fruitPrice);
    vegQuantity = parseInt(vegQuantity);
    fruitQuantity = parseInt(fruitQuantity);

    let price = vegPrice * vegQuantity + fruitPrice * fruitQuantity;
    let priceEuro = price / 1.94;

    console.log(priceEuro);
}

vegetableMarket(['0.194', '19.4', '10', '10']);
vegetableMarket(['1.5', '2.5', '10', '10']);