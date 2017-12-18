function stopNumber([n, m, s]) {
    n = Number(n);
    m = Number(m);
    s = Number(s);

    let numbers = [];

    for (let i = m; i >= n; i--) {
        if (i % 6 == 0) {
            if (i == s) {
                console.log(numbers.join(' '));
                return;
            }

            numbers.push(i);
        }
    }

    console.log(numbers.join(' '));
}

stopNumber(['1', '30', '15']);
stopNumber(['1', '36', '12']);
stopNumber(['20', '1000', '36']);