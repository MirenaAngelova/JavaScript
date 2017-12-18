function alcoholMarket([priceWhisky, beer, wine, grape, whisky]) {
    priceWhisky = Number(priceWhisky);
    beer = Number(beer);
    wine = Number(wine);
    grape = Number(grape);
    whisky = Number(whisky);

    let priceGrape = priceWhisky / 2;
    let priceWine = priceGrape * (1 - 40 / 100);
    let priceBeer = priceGrape * (1 - 80 / 100);

    let price = whisky * priceWhisky + beer * priceBeer + wine * priceWine + grape * priceGrape;
    console.log(price.toFixed(2));
}

alcoholMarket(['50', '10', '3.5', '6.5', '1']);
alcoholMarket(['63.44', '3.57', '6.35', '8.15', '2.5']);