function danceHall([l, w, a]) {
    l = Number(l);
    w = Number(w);
    a = Number(a);

    let areaHall = l * w;
    let area = areaHall - a * a - areaHall / 10;
    let dancers = area * 10000 / (40 + 7000);

    console.log(Math.floor(dancers));
}

danceHall(['50', '25', '2']);
danceHall(['70', '20', '4']);