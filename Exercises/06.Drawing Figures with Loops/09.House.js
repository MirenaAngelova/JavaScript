function house([n]) {
    n = Number(n);
    let roof = Math.ceil(n / 2);
    let base = n - roof;
    for (let i = 0; i < roof; i++) {
        console.log('-'.repeat(roof - 1 - i) +
            '*'.repeat(n - 2 * (roof - 1) + 2 * i) + '-'.repeat(roof - 1 - i));
    }
    for (let i = 0; i < base; i++) {
        console.log('|' + '*'.repeat(n - 2) + '|')
    }
}
house(['2']);
house(['3']);
house(['4']);
house(['5']);
house(['6']);