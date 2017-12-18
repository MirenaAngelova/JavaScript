function cups([toBeMade, workers, days]) {
    toBeMade = Number(toBeMade);
    workers = Number(workers);
    days = Number(days);

    let madeCups = Math.floor((workers * days * 8) / 5);

    let diff = (madeCups - toBeMade) * 4.20;
    if (diff < 0) {
        console.log(`Losses: ${(Math.abs(diff)).toFixed(2)}`);

    } else {
        console.log(`${diff.toFixed(2)} extra money`);
    }
}
cups(['500', '8', '20']);
cups(['150', '7', '18']);