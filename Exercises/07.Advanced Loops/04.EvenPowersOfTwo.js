function evenPowersOfTwo(n) {
    for (var i = 0; i <= n; i += 2) {
        let evenTwoPow = Math.pow(2, i);
        console.log(evenTwoPow);
    }
}
evenPowersOfTwo(3);
evenPowersOfTwo(4);
evenPowersOfTwo(5);
evenPowersOfTwo(6);
evenPowersOfTwo(7);