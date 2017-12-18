function areaOfFigures(array) {
    let figure = array.shift().toString().substring(0, 1);
    let sizes = array.map(Number);
    let area = Number(0);

    switch (figure) {
        case 's':
            area = Math.pow(sizes[0], 2);
            break;
        case 'r':
            area = sizes[0] * sizes[1];
            break;
        case 'c':
            area = Math.PI * sizes[0] * sizes[0];
            break;
        case 't':
            area = sizes[0] * sizes[1] / 2;
            break;
    }
    console.log(Math.round(area * 1000) / 1000);
}

areaOfFigures(['square', '5']);
areaOfFigures(['rectangle', '7', '2.5']);
areaOfFigures(['circle', '6']);
areaOfFigures(['triangle', '4.5', '20']);