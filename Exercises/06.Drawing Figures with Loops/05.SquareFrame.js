function squareFrame([n]) {
    n = Number(n);
    for (let i = 0; i < n; i++) {
        let plusPipe = i == 0 || i == n - 1 ? '+' : '|';
        console.log(plusPipe + ' -'.repeat(n - 2) + ' ' + plusPipe);
    }
}
squareFrame(['3']);
squareFrame(['7']);
squareFrame(['8']);