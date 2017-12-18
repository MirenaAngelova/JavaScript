function rhombusOfStars([n]) {
    n = Number(n);
    let i = Number(0);
    let count = Number(0);
    while (count < 2 * n - 1) {

        console.log(' '.repeat(n - 1 - i) + '* '.repeat(i) + '*');

        if (count >= n - 1) {
            i--;
        } else {
            i++;
        }
        count++;
    }
}
rhombusOfStars(['3']);
rhombusOfStars(['4']);
rhombusOfStars(['5']);
rhombusOfStars(['6']);