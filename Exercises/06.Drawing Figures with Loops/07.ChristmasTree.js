function christmasTree([n]) {
    n = Number(n);
    let i = Number(0);

    while (i < n + 1) {
        console.log(' '.repeat(n - i) + '*'.repeat(i) + ' ' + '|' +
            ' ' + '*'.repeat(i));

        i++;
    }
}
christmasTree(['1']);
christmasTree(['2']);
christmasTree(['3']);
christmasTree(['4']);