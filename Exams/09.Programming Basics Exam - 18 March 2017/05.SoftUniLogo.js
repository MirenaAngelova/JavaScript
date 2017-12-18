function softuniLogo([n]) {
    n = Number(n);

    for (let i = 0; i < 2 * n; i++) {
        console.log('.'.repeat(6 * n - 3 - 3 * i) + '#'.repeat(1 + 6 * i) +
            '.'.repeat(6 * n - 3 - 3 * i));
    }

    for (let i = 0; i < n - 2; i++) {
        console.log('|' + '.'.repeat(2 + 3 * i) + '#'.repeat(12 * n - 11 - 6 * i) +
            '.'.repeat(3 + 3 * i));
    }

    for (let i = 0; i < n; i++) {
        let pipeAt = i != n - 1 ? '|' : '@'
        console.log(pipeAt + '.'.repeat(((n - 1) * 3) - 1) + '#'.repeat(6 * n + 1) +
            '.'.repeat((n - 1) * 3));
    }

}

softuniLogo(['3']);
softuniLogo(['4']);
softuniLogo(['5']);