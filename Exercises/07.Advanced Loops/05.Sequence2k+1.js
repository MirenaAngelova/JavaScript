function sequence(num) {
    let s = [];
    let result = seq(1);
    console.log(s.join('\n'));

    function seq(k) {
        if (k > num) {
            return;
        } else {
            s.push(k);
            k = seq(2 * k + 1);
        }
    }
}

//sequence(3);
// sequence(8);
sequence(17);
//sequence(15);
//sequence(31);