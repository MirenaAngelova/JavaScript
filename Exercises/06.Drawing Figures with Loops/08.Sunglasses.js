function sunglasses([n]) {
    n = Number(n);
    let i = Number(0);
    while (i < n) {
        let starSlash = i == 0 || i == n - 1 ? '*' : '/';
        let spacePipe = i == Math.ceil(n / 2) - 1 ? '|' : ' ';
        console.log('*' + starSlash.repeat(2 * n - 2) + '*' +
            spacePipe.repeat(n) + '*' + starSlash.repeat(2 * n - 2) + '*');
        i++;
    }
}
sunglasses(['3']);
sunglasses(['4']);
sunglasses(['5']);