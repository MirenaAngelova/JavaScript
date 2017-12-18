function butterfly([n]) {
    n = Number(n);

    for (let i = 0; i < n - 2; i++) {
        let asterisk = i % 2 == 0 ? '*' : '-';

        console.log(asterisk.repeat(n - 2) + '\\' + ' ' + '/' + asterisk.repeat(n - 2));
    }

    console.log(' '.repeat(n - 1) + '@' + ' '.repeat(n - 1));

    for (let i = 0; i < n - 2; i++) {
        let asterisk = i % 2 == 0 ? '*' : '-';

        console.log(asterisk.repeat(n - 2) + '/' + ' ' + '\\' + asterisk.repeat(n - 2));
    }
}

butterfly(['3']);
butterfly(['5']);
butterfly(['7']);