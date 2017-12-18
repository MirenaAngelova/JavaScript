function styrofoam([budget, area, windows, styrofoam, price]) {
    budget = Number(budget);
    area = Number(area);
    windows = Number(windows);
    styrofoam = Number(styrofoam);
    price = Number(price);

    let packet = area - windows * 2.4;
    packet += packet * 10 / 100;
    packet /= styrofoam;

    let money = Math.ceil(packet) * price;
    let diff = budget - money;

    if (diff < 0) {
        console.log(`Need more: ${Math.abs(diff).toFixed(2)}`);
    } else {
        console.log(`Spent: ${money.toFixed(2)}`);
        console.log(`Left: ${diff.toFixed(2)}`);
    }
}

styrofoam(['500', '200', '5', '20', '30']);
styrofoam(['190.9', '250.50', '2', '24.6', '32.60']);