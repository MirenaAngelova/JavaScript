function radiansToDegrees(radians) {
    radians = Number(radians);

    let degrees = radians * 180 / Math.PI;
    degrees = Math.round(degrees);

    console.log(degrees);
}

radiansToDegrees(['3.1416']);
radiansToDegrees(['6.2832']);
radiansToDegrees(['0.7854']);
radiansToDegrees(['0.5236']);