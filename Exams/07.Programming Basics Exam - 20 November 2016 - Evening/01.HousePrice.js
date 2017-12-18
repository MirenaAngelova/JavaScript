function housePrice([roomFirst, kitchen, price]) {
    roomFirst = parseFloat(roomFirst);
    kitchen = parseFloat(kitchen);
    price = parseFloat(price);

    let bathroom = roomFirst * 1 / 2;
    let roomSecond = roomFirst * (1 + 10 / 100);
    let roomThird = roomSecond * (1 + 10 / 100);

    let finalPrice = kitchen + bathroom + roomFirst + roomSecond + roomThird;
    finalPrice += finalPrice * 5 / 100;
    finalPrice *= price;

    console.log(finalPrice.toFixed(2));
}

housePrice(['20', '10', '699.99']);
housePrice(['13.23', '7.89', '600']);