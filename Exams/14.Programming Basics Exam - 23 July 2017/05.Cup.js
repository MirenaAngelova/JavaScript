function cup([n]) {
    n = Number(n);
    for (let i = 0; i < n + 1; i++) {
        let sharpDot = i < n / 2 ? '#' : '.';

        console.log(`${'.'.repeat(n + i)}` + `#${sharpDot.repeat(3 * n - 2 - 2 * i)}#` +
            `${'.'.repeat(n + i)}`);
    }
    console.log(`${'.'.repeat(2 * n)}${'#'.repeat(n)}${'.'.repeat(2 * n)}`);

    for (let i = 0; i < n + 2; i++) {
        let danceSharp =
            i == n / 2 ? `${'.'.repeat(n / 2 - 3)}D^A^N^C^E^${'.'.repeat(n / 2 - 3)}` :
            '#'.repeat(n + 4);

        if (n + 4 == 10) {
            console.log(`${'.'.repeat(2 * n - 2)}${danceSharp}${'.'.repeat(2 * n - 2)}`);

        } else {
            console.log(`${'.'.repeat(2 * n - 2)}` +
                `${danceSharp}` +
                `${'.'.repeat(2 * n - 2)}`);
        }
    }
}

//cup(['6']);
//cup(['8']);
cup(['10']);