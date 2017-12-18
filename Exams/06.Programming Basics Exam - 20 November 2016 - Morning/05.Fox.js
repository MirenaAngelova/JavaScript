function fox([n]) {
    for (let i = 0; i < n; i++) {

        console.log('*'.repeat(i + 1) + '\\' + '-'.repeat(2 * n - 1 - 2 * i) +
            '/' + '*'.repeat(i + 1));
    }

    for (let i = 0; i < parseInt(n / 3); i++) {
        console.log('|' + '*'.repeat(parseInt(n / 2) + i) + '\\' + '*'.repeat(n - 2 * i) +
            '/' + '*'.repeat(parseInt(n / 2) + i) + '|');
    }

    for (let i = 0; i < n; i++) {

        console.log('-'.repeat(i + 1) + '\\' + '*'.repeat(2 * n - 1 - 2 * i) +
            '/' + '-'.repeat(i + 1));
    }
}

fox(['7']);
fox(['9']);
fox(['11']);