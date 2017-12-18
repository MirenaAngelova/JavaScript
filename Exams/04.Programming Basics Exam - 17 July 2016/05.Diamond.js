function diamond([n]) {
    console.log('.'.repeat(n) + '*'.repeat(3 * n) + '.'.repeat(n));

    for (let i = 0; i < n - 1; i++) {
        console.log('.'.repeat(n - 1 - i) + '*' + '.'.repeat(3 * n + 2 * i) +
            '*' + '.'.repeat(n - 1 - i));
    }

    console.log('*'.repeat(5 * n));


    for (let i = 0; i < 2 * n; i++) {
        console.log('.'.repeat(i + 1) + '*' + '.'.repeat(5 * n - 4 - 2 * i) +
            '*' + '.'.repeat(i + 1));
    }

    console.log('.'.repeat(2 * n + 1) + '*'.repeat(n - 2) + '.'.repeat(2 * n + 1));
}

diamond(['4']);
diamond(['7']);