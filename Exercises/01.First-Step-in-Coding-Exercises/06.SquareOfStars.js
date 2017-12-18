function squareOfStars([arg]) {
    let n = Number(arg);

    for (var i = 0; i < n; i++){

        if (i == 0 || i == n - 1) {
            console.log('*'.repeat(n));

        } else {
            console.log('*' + ' '.repeat(n-2) + '*');

        }
    }
}

squareOfStars('5');

