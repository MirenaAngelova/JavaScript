function flowers([chrysanthemums, roses, tulips, season, holiday]) {
    chrysanthemums = Number(chrysanthemums);
    roses = Number(roses);
    tulips = Number(tulips);
    season = season.toString().substring(0, 2);

    let flowersCount = chrysanthemums + roses + tulips;
    let tulipsSpring = false;
    let rosesWinter = false;

    let bouquetPrice = Number(0);

    if (season == 'Sp' || season == 'Su') {
        chrysanthemums *= 2.00;
        roses *= 4.10;
        tulips *= 2.50;

        if (tulips > 7 && season == 'Sp') {
            tulipsSpring = true;
        }

    } else {
        chrysanthemums *= 3.75;
        roses *= 4.50;

        if (roses >= 10 && season == 'Wi') {
            rosesWinter = true;
        }

        tulips *= 4.15;
    }

    bouquetPrice = chrysanthemums + roses + tulips;

    if (holiday == 'Y') {
        bouquetPrice *= 1 + 15 / 100;
    }

    if (tulipsSpring) {
        bouquetPrice *= 1 - 5 / 100;
    }

    if (rosesWinter) {
        bouquetPrice *= 1 - 10 / 100;
    }

    if (flowersCount > 20) {
        bouquetPrice *= 1 - 20 / 100;
    }

    bouquetPrice += 2;
    console.log(bouquetPrice.toFixed(2));
}
flowers(['2', '4', '8', 'Spring', 'Y']);
flowers(['3', '10', '9', 'Winter', 'N']);
flowers(['10', '10', '10', 'Autumn', 'N']);