function energyLoss(array) {
    let hours = array.map(Number);
    let nDays = hours.shift();
    let aDancers = hours.shift();
    let energyLeft = Number(0);

    for (let i = 0; i < nDays; i++) {

        if (i % 2 == 0) { //odd

            if (hours[i] % 2 == 0) { //even
                energyLeft += 100 - 49;

            } else { //odd
                energyLeft += 100 - 30;
            }

        } else { //even

            if (hours[i] % 2 == 0) { //even
                energyLeft += 100 - 68;

            } else { //odd
                energyLeft += 100 - 65;
            }
        }
    }
    energyLeft /= nDays;
    if (energyLeft >= 50) {
        console.log(`They feel good! Energy left: ${energyLeft.toFixed(2)}`);
    } else {
        console.log(`They are wasted! Energy left: ${energyLeft.toFixed(2)}`);
    }
}
energyLoss(['4', '10', '5', '8', '2', '3']);
energyLoss(['4', '10', '1', '1', '1', '1']);