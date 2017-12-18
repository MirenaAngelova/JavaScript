function drawFort([n]) {
    n = Number(n);
    console.log('/' + '^'.repeat(parseInt(n / 2)) + '\\' +
        '_'.repeat(2 * n - 2 * parseInt(n / 2) - 4) + '/' + '^'.repeat(parseInt(n / 2)) + '\\');

    for (let index = 0; index < n - 3; index++) {
        console.log('|' + ' '.repeat((2 * n) - 2) + '|');
    }

    console.log('|' + ' '.repeat(parseInt(n / 2) + 1) +
        '_'.repeat(2 * n - 2 * parseInt(n / 2) - 4) + ' '.repeat(parseInt(n / 2) + 1) + '|');

    console.log('\\' + '_'.repeat(parseInt(n / 2)) + '/' +
        ' '.repeat(2 * n - 2 * parseInt(n / 2) - 4) + '\\' + '_'.repeat(parseInt(n / 2)) + '/');
}

drawFort(['3']);
drawFort(['4']);
drawFort(['5']);
drawFort(['8']);