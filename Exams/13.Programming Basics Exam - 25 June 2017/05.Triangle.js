function triangle([n]) {
    n = Number(n);
    console.log(`${'*'.repeat(4 * n + 1 )}`);

    for (let i = 0; i < n; i++) {

        if (i == parseInt(n / 2)) {
            console.log(`${'.'.repeat(i + 1)}` + `${'#'.repeat(2 * n - 1 - 2 * i)}` +
                `${' '.repeat(i - 1)}` + `(@)` + `${' '.repeat(i - 1)}` +
                `${'#'.repeat(2 * n - 1 - 2 * i)}` +
                `${'.'.repeat(i + 1)}`);
        } else {
            console.log(`${'.'.repeat(i + 1)}` + `${'#'.repeat(2 * n - 1 - 2 * i)}` +
                `${' '.repeat(2 * i + 1)}` + `${'#'.repeat(2 * n - 1 - 2 * i)}` +
                `${'.'.repeat(i + 1)}`);
        }
    }

    for (let i = 0; i < n; i++) {
        console.log(`${'.'.repeat(n + 1 + i)}` + `${'#'.repeat(2 * n - 1 - 2 * i)}` +
            `${'.'.repeat(n + 1 + i)}`);
    }
}

triangle(['5']);
triangle(['8']);