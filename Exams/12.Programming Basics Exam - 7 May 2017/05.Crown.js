function crown([n]) {
    console.log(`@${' '.repeat(n - 2)}@${' '.repeat(n - 2)}@`);
    console.log(`**${' '.repeat(n - 3)}*${' '.repeat(n - 3)}**`);
    for (let i = 0; i < n / 2 - 2; i++) {
        console.log(`*${'.'.repeat(i + 1)}*${' '.repeat(n - 5 - 2 * i)}*` +
            `${'.'.repeat(2 * i + 1)}*${' '.repeat(n - 5 - 2 * i)}*${'.'.repeat(i + 1)}*`);
    }
    console.log(`*${'.'.repeat(n / 2 - 1)}*${'.'.repeat(n - 3)}*${'.'.repeat(n / 2 - 1)}*`);

    console.log(`*${'.'.repeat(n / 2)}` +
        `${'*'.repeat(n / 2 - 2)}.${'*'.repeat(n / 2 - 2)}` +
        `${'.'.repeat(n / 2)}*`);
    console.log('*'.repeat(2 * n - 1));
    console.log('*'.repeat(2 * n - 1));
}

//crown(['8']);
//crown(['10']);
crown(['14']);