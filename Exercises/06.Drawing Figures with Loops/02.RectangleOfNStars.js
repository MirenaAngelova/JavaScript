function rectangleOfNStars([n]) {
    n = Number(n);
    for (var i = 0; i < n; i++) {
        console.log('*'.repeat(n));
    }
}
rectangleOfNStars(['3']);
rectangleOfNStars(['5']);
rectangleOfNStars(['8']);