function pointInRectangle([x1, y1, x2, y2, x, y]) {
    x1 = Number(x1);
    y1 = Number(y1);
    x2 = Number(x2);
    y2 = Number(y2);
    x = Number(x);
    y = Number(y);

    if (x1 <= x && x <= x2 && y1 <= y && y <= y2) {

        console.log('Inside');
    } else {

        console.log('Outside');
    }
}

pointInRectangle(['2', '-3', '12', '3', '8', '-1']);
pointInRectangle(['-1', '-3', '4', '1', '0.5', '1']);
pointInRectangle(['2', '-3', '12', '3', '11', '-3.5']);
pointInRectangle(['-1', '-3', '4', '1', '-1.2', '1.4']);