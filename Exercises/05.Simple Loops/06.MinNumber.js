function minNumber(array) {
    let n = array.shift();
    let nums = array.map(Number);
    let min = Number.POSITIVE_INFINITY;

    for (let num of nums) {
        if (num < min) {
            min = num;
        }
    }

    console.log(min);
}
minNumber(['2', '100', '99']);
minNumber(['3', '-10', '20', '-30']);
minNumber(['4', '45', '-20', '7', '99']);
minNumber(['1', '999']);
minNumber(['2', '-1', '-2']);