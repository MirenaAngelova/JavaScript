function dogHouse([width, height]) {
    width = Number(width);
    height = Number(height);

    let redPaint = width * width / 2 * 2;

    let greenPaint = redPaint + width / 2 * width / 2 * 2 - width / 5 * width / 5 +
        width / 2 * (height - width / 2) / 2 * 2;

    redPaint /= 5;
    greenPaint /= 3;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));
}

dogHouse(['6', '10']);
dogHouse(['10.25', '15.45']);