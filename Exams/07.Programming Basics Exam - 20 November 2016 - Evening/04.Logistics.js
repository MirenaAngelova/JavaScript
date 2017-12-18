function logistics(array) {
    let load = array.map(Number);
    let n = load.shift();
    let minibus = Number(0);
    let truck = Number(0);
    let train = Number(0);
    let averagePrice = Number(0);
    let loads = Number(0);
    let tonsMinibus = Number(0);
    let tonsTruck = Number(0);
    let tonsTrain = Number(0);


    for (let l of load) {

        if (l <= 3) {
            minibus += l;

        } else if (l >= 4 && l <= 11) {
            truck += l;

        } else {
            train += l;
        }
    }

    loads = minibus + truck + train;
    averagePrice = (minibus * 200 + truck * 175 + train * 120) / loads;
    tonsMinibus = minibus / loads * 100;
    tonsTruck = truck / loads * 100;
    tonsTrain = train / loads * 100;

    console.log(averagePrice.toFixed(2));
    console.log(tonsMinibus.toFixed(2) + '%');
    console.log(tonsTruck.toFixed(2) + '%');
    console.log(tonsTrain.toFixed(2) + '%');
}

logistics(['4', '1', '5', '16', '3']);
logistics(['5', '2', '10', '20', '1', '7']);