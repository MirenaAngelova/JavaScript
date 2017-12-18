function reward(array) {
    let points = array.map(Number);

    let parts = points.shift();
    let prize = points.shift();
    let projectPrize = Number(0);
    let bonus = Number(0);

    for (let i = 0; i < points.length; i++) {
        bonus = i % 2 == 0 ? 1 : 2;
        projectPrize += points[i] * prize * bonus;
    }

    console.log(`The project prize was ${projectPrize.toFixed(2)} lv.`)
}

reward(['7', '100.5', '2', '4', '5', '1', '1', '7', '3']);