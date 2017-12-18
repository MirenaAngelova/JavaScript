function inchesToCentimeters([input]) {
    let inches = parseFloat(input);
    let centimeters = inches * 2.54;
    let text = 'centimeters = ';

    console.log(text + centimeters);
}

inchesToCentimeters(['2']);