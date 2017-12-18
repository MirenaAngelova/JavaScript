function squareOfStars([n]) {
    n = Number(n);
    let squareRow = [];
    let cols = n + n - 1;
    let i = Number(0);
    while (i <= cols * n - 1) {

        if ((parseInt(i / cols) % 2 == 1 && i % 2 == 0) ||
            (parseInt(i / cols) % 2 == 0 && i % 2 == 1)) {
            squareRow.push(' ');
        } else {
            squareRow.push('*')
        }
        if ((i + 1) % cols == 0) {
            squareRow.push('\n');
        }
        i++;
    }
    // for (var i = 0; i < n; i++) {

    //     for (var j = 0; j < cols; j++) {
    //         let starSpace = j % 2 == 0 ? '*' : ' ';
    //         squareRow.push(starSpace);
    //     }
    //     squareRow.push('\n');
    // }
    console.log(squareRow.join(``));
}
squareOfStars(['2']);
squareOfStars(['5']);
squareOfStars(['6']);
squareOfStars(['7']);