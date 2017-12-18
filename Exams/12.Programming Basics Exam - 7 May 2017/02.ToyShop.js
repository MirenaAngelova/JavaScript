function toyShop([priceExcursion, puzzles, dolls, tedies, minions, trucks]) {
    priceExcursion = Number(priceExcursion);
    puzzles = Number(puzzles);
    dolls = Number(dolls);
    tedies = Number(tedies);
    minions = Number(minions);
    trucks = Number(trucks);

    let orderedToys = puzzles + dolls + tedies + minions + trucks;
    let priceOrderedToys = puzzles * 2.6 + dolls * 3 + tedies * 4.1 + minions * 8.2 + trucks * 2;

    if (orderedToys >= 50) {
        priceOrderedToys -= priceOrderedToys * 25 / 100;
    }

    priceOrderedToys -= priceOrderedToys * 10 / 100;

    let diff = priceOrderedToys - priceExcursion;
    if (diff < 0) {
        console.log(`Not enough money! ${Math.abs(diff).toFixed(2)} lv needed.`);
    } else {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    }
}

toyShop(['40.8', '20', '25', '30', '50', '10']);
toyShop(['320', '8', '2', '5', '5', '1']);