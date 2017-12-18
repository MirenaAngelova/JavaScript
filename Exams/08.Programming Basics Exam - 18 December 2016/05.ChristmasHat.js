function christmasHat([n]) {
    n = Number(n);

    console.log('.'.repeat(2 * n - 1) + '/' + '|' + '\\' + '.'.repeat(2 * n - 1));
    console.log('.'.repeat(2 * n - 1) + '\\' + '|' + '/' + '.'.repeat(2 * n - 1));

    for (let i = 0; i < n * 2; i++) {

        console.log('.'.repeat(2 * n - 1 - i) + '*' + '-'.repeat(i) + '*' + '-'.repeat(i) + '*' +
            '.'.repeat(2 * n - 1 - i));
    }

    console.log('*'.repeat(4 * n + 1));
    console.log('*.'.repeat(2 * n) + '*');
    console.log('*'.repeat(4 * n + 1));
}

christmasHat(['4']);
christmasHat(['7']);