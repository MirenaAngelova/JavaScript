function controlNumber([n, m, control]) {
    n = Number(n);
    m = Number(m);
    control = Number(control);

    let sum = Number(0);
    let counter = Number(0);

    for (let first = 1; first <= n; first++) {

        for (let second = m; second >= 1; second--) {
            sum += first * 2 + second * 3;
            counter++;
            if (sum >= control) {
                console.log(`${counter} moves`);
                console.log(`Score: ${sum} >= ${control}`);
                return;
            }
        }
    }

    console.log(`${counter} moves`);
}

controlNumber(['2', '2', '123']);
controlNumber(['3', '4', '115']);