function changeTiles([cash, height, width, sideTriangle, heightTriangle, tilePrice, priceArtisan]) {

    cash = Number(cash);
    height = Number(height);
    width = Number(width);
    sideTriangle = Number(sideTriangle);
    heightTriangle = Number(heightTriangle);
    tilePrice = Number(tilePrice);
    priceArtisan = Number(priceArtisan);

    let tilesCount = Math.ceil(height * width / (sideTriangle * heightTriangle / 2)) + 5;
    let neededMoney = tilesCount * tilePrice + priceArtisan;

    let diff = neededMoney - cash;
    if (diff <= 0) {
        console.log(`${(Math.abs(diff)).toFixed(2)} lv left.`)

    } else {
        console.log(`You'll need ${diff.toFixed(2)} lv more.`)
    }
}

changeTiles(['500', '3', '2.5', '0.5', '0.7', '7.80', '100']);
changeTiles(['1000', '5.55', '8.95', '0.90', '0.85', '13.99', '321']);