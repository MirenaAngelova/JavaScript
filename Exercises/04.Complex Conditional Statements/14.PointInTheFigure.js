/* function pointInTheFigure([h, x, y]) {

    h = Number(h);
    x = Number(x);
    y = Number(y);

    if ((x > 0 && x < 3 * h && y > 0 && y < h) ||
        (x > h && x < 2 * h && y > h && y < 4 * h)) {
        console.log('inside');
    } else if (((x >= 0 && x <= 3 * h) && y == 0) ||
        ((x == 0 || x == 3 * h) && (y >= 0 && y <= h)) ||
        (((x >= 0 && x <= h) || (x >= 2 * h && x <= 3 * h)) && (y == h)) ||
        (x == h || x == 2 * h) && (y >= h && y <= 4 * h) ||
        (x >= h && x <= 2 * h) && (y == 4 * h)) {
        console.log('border');
    } else {
        console.log('outside');
    }
}
 */

function pointInTheFigure([h, x, y]) {

    h = Number(h);
    x = Number(x);
    y = Number(y);

    if ((x > 0 && x < 3 * h && y > 0 && y < h) ||
        (x > h && x < 2 * h && y >= h && y < 4 * h)) {
        console.log('inside');
    } else if (((x < h || x > 2 * h) && (y > h)) || (y > 4 * h) ||
        ((x < 0 || x > 3 * h) || (y < 0))) {
        console.log('outside');
    } else {
        console.log('border');

    }
}

pointInTheFigure(['2', '3', '10']);
pointInTheFigure(['2', '3', '1']);
pointInTheFigure(['2', '2', '2']);
pointInTheFigure(['2', '6', '0']);
pointInTheFigure(['2', '0', '6']);
pointInTheFigure(['15', '13', '55']);
pointInTheFigure(['15', '29', '37']);
pointInTheFigure(['15', '37', '18']);
pointInTheFigure(['15', '-4', '7']);
pointInTheFigure(['15', '30', '0']);