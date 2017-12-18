function latinLetters() {
    let n = Number(97);

    while (n <= 122) {
        let letter = String.fromCharCode(n);
        console.log(letter);
        n++;
    }
}
latinLetters();