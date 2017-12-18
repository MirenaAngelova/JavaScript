function harvest([x, y, z, w]) {
    x = parseInt(x);
    y = parseFloat(y);
    z = parseInt(z);
    w = parseInt(w);

    let wineHarvest = parseFloat(x * y * 40 / 100 / 2.5);
    let diff = parseFloat(wineHarvest - z);

    if (diff >= 0) {
        let littersPerPerson = parseFloat(diff / w);
        console.log(`Good harvest this year! Total wine: ${Math.floor(wineHarvest)} liters.`);
        console.log(`${Math.ceil(diff)} liters left -> ${Math.ceil(littersPerPerson)} liters per person.`);
    } else if (diff < 0) {
        console.log(`It will be a tough winter! More ${Math.floor(Math.abs(diff))} liters wine needed.`)
    }
}

//harvest(['650', '2', '175', '3']);
//harvest(['1020', '1.5', '425', '4']);
harvest(['4580', '7.80', '599', '19']);