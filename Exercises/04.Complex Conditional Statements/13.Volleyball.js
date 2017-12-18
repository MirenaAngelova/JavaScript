function volleyball([leapNormal, p, h]) {
    leapNormal = leapNormal.toString().substring(0, 1);
    p = Number(p);
    h = Number(h);

    let play = h + 2 / 3 * p + (48 - h) * 3 / 4;
    if (leapNormal == 'l') {
        play += play * 15 / 100;
    }

    console.log(Math.floor(play));
}
volleyball(['leap', '5', '2']);
volleyball(['normal', '3', '2']);
volleyball(['leap', '2', '3']);
volleyball(['normal', '11', '6']);
volleyball(['leap', '0', '1']);
volleyball(['normal', '6', '13']);