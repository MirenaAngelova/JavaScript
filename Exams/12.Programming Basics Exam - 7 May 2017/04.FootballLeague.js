function footballLeague(array) {
    let sectors = array.map(function(item) {
        return item.toString();
    });
    let capacityStadium = parseInt(sectors.shift());
    let fans = Number(sectors.shift());

    let fanA = Number(0);
    let fanB = Number(0);
    let fanV = Number(0);
    let fanG = Number(0);

    for (let sector of sectors) {
        switch (sector) {
            case 'A':
                fanA++;
                break;
            case 'B':
                fanB++;
                break;
            case 'V':
                fanV++;
                break;
            case 'G':
                fanG++;
                break;
        }
    }


    console.log(`${(fanA / fans * 100).toFixed(2)}%`);
    console.log(`${(fanB / fans * 100).toFixed(2)}%`);
    console.log(`${(fanV / fans * 100).toFixed(2)}%`);
    console.log(`${(fanG / fans * 100).toFixed(2)}%`);
    console.log(`${(fans / capacityStadium * 100).toFixed(2)}%`);
}

footballLeague(['76', '10', 'A', 'V', 'V', 'V', 'G', 'B', 'A', 'V', 'B', 'B']);
footballLeague(['93', '16', 'A', 'V', 'G', 'G', 'B', 'B', 'G', 'B', 'A', 'B',
    'B', 'B', 'A', 'B', 'B', 'A'
]);
footballLeague(['1000', '12', 'A', 'A', 'V', 'V', 'A', 'G', 'A', 'A', 'V', 'G', 'V', 'A']);