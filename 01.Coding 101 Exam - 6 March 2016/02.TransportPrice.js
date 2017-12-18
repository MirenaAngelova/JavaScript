function transportPrice([n, dayNight]) {
    n = Number(n);
    let cheapestTransport = 0;


    if (dayNight == 'day' && n < 20) {

        cheapestTransport = 0.7 + 0.79 * n;
    } else if (dayNight == 'night' && n < 20) {

        cheapestTransport = 0.7 + 0.9 * n;
    } else if (n >= 20 && n < 100) {

        cheapestTransport = 0.09 * n;
    } else {

        cheapestTransport = 0.06 * n;
    }

    console.log(Math.round(cheapestTransport * 100) / 100);
}

transportPrice(['5', 'day']);
transportPrice(['7', 'night']);
transportPrice(['25', 'day']);
transportPrice(['180', 'night']);