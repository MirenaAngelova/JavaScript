function rocket([n]) {
    n = Number(n);

    for (let i = 0; i < n; i++) {

        console.log('.'.repeat(3 * n / 2 - 1 - i) + '/' + ' '.repeat(2 * i) + '\\' +
            '.'.repeat(3 * n / 2 - 1 - i));
    }

    console.log('.'.repeat(n / 2) + '*'.repeat(n * 2) + '.'.repeat(n / 2));

    for (let i = 0; i < n * 2; i++) {

        console.log('.'.repeat(n / 2) + '|' + '\\'.repeat(n * 2 - 2) + '|' + '.'.repeat(n / 2));
    }

    for (let i = 0; i < n / 2; i++) {
        console.log('.'.repeat(n / 2 - i) + '/' + '*'.repeat(n * 2 - 2 + 2 * i) + '\\' +
            '.'.repeat((n / 2) - i));
    }
}

rocket(['4']);
rocket(['6']);
rocket(['8']);