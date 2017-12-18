function stop([n]) {
    n = Number(n);

    console.log('.'.repeat(n + 1) + '_'.repeat(n * 2 + 1) + '.'.repeat(n + 1));
    for (let i = 0; i < n; i++) {
        console.log('.'.repeat(n - i) + '/'.repeat(2) +
            '_'.repeat(2 * n - 1 + 2 * i) + '\\'.repeat(2) + '.'.repeat(n - i));
    }
    console.log('/'.repeat(2) +
        '_'.repeat(2 * n - 3) + 'STOP!' + '_'.repeat(2 * n - 3) + '\\'.repeat(2));

    for (let i = n; i > 0; i--) {
        console.log('.'.repeat(n - i) + '\\'.repeat(2) +
            '_'.repeat(2 * n - 1 + 2 * i) + '/'.repeat(2) + '.'.repeat(n - i));
    }
}

stop(['3']);
stop(['6']);
stop(['7']);