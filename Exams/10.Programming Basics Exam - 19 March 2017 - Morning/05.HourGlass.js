function hourGlass([n]) {
    n = Number(n);

    //2 * n + 1 width
    console.log('*'.repeat(2 * n + 1));

    for (let i = 0; i < n - 1; i++) {
        let whiteSpaceAt = i == 0 ? ' ' : '@';
        console.log('.'.repeat(i + 1) + '*' + whiteSpaceAt.repeat(2 * n - 3 - 2 * i) + '*' +
            '.'.repeat(i + 1));

    }
    console.log('.'.repeat(n) + '*' + '.'.repeat(n));

    for (let i = n - 2; i >= 0; i--) {
        let whiteSpaceAt = i != 0 ? ' ' : '@';
        console.log('.'.repeat(i + 1) + '*' + whiteSpaceAt.repeat(n - 2 - i) + '@' +
            whiteSpaceAt.repeat(n - 2 - i) + '*' + '.'.repeat(i + 1));
    }

    console.log('*'.repeat(2 * n + 1));
}
hourGlass(['5']);
hourGlass(['7']);
hourGlass(['9']);