function cinema([projection, r, c]) {
    projection = projection.toString().substring(0, 1);
    r = Number(r);
    c = Number(c);
    let price = r * c;

    switch (projection) {
        case 'P':
            price *= 12;
            break;
        case 'N':
            price *= 7.5;
            break;
        case 'D':
            price *= 5;
            break;
    }
    console.log(price.toFixed(2));
}
cinema(['Premiere', '10', '12']);
cinema(['Normal', '21', '13']);
cinema(['Discount', '12', '30']);