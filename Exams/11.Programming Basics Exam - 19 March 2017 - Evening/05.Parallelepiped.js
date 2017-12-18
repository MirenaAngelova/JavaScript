function parallelepiped([n]) {
    //3 * N + 1 - width
    console.log(`+${'~'.repeat(n - 2)}+${'.'.repeat(2 * n + 1)}`);

    for (let i = 0; i < 2 * n + 1; i++) {
        console.log(`|${'.'.repeat(i)}\\${'~'.repeat(n - 2)}\\${'.'.repeat(2 * n - i)}`);
    }

    for (let i = 0; i < 2 * n + 1; i++) {
        console.log(`${'.'.repeat(i)}\\${'.'.repeat(2 * n - i)}|${'~'.repeat(n - 2)}|`);
    }
    console.log(`${'.'.repeat(2 * n + 1)}+${'~'.repeat(n - 2)}+`);
}
parallelepiped(['5']);
parallelepiped(['6']);
parallelepiped(['7']);