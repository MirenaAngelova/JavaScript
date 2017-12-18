function flowerShop([magnolia, hyacinth, rose, cactus, giftPrice]) {
    magnolia = Number(magnolia);
    hyacinth = Number(hyacinth);
    rose = Number(rose);
    cactus = Number(cactus);
    giftPrice = parseFloat(giftPrice);

    let profit = magnolia * 3.25 + hyacinth * 4 + rose * 3.50 + cactus * 8;
    profit -= profit * 5 / 100;

    let diff = profit - giftPrice;
    if (diff < 0) {
        console.log(`She will have to borrow ${Math.ceil(Math.abs(diff))} leva.`);

    } else {
        console.log(`She is left with ${Math.floor(diff)} leva.`);
    }
}

flowerShop(['2', '3', '5', '1', '50']);
flowerShop(['15', '7', '5', '10', '100']);