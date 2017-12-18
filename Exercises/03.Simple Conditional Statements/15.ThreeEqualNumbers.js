function threeEqualNumbers([a, b, c]) {
    a = Number(a);
    b = Number(b);
    c = Number(c);
    if (a == b && a == c) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

threeEqualNumbers(['3', '3', '3']);
threeEqualNumbers(['5', '3', '6']);
threeEqualNumbers(['3', '5', '3']);