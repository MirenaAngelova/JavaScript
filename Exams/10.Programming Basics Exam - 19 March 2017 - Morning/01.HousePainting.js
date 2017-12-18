function housePainting([x, y, h]) {
    x = Number(x);
    y = Number(y);
    h = Number(h);

    let green = (x * y * 2 - (1.5 * 1.5 * 2) + x * x * 2 - (1.2 * 2)) / 3.4;
    let red = (x * y * 2 + x * h) / 4.3;

    console.log(green.toFixed(2));
    console.log(red.toFixed(2));
}

housePainting(['6', '10', '5.2']);
housePainting(['10.25', '15.45', '8.88']);