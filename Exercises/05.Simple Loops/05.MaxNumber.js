function maxNumber(array) {
    let n = array.shift();
    let nums = array.map(Number);
    let max = Number.NEGATIVE_INFINITY;

    for (let num of nums) {
        if (num > max) {
            max = num;
        }
    }

    console.log(max);
}
maxNumber(['2', '100', '99']);
maxNumber(['3', '-10', '20', '-30']);
maxNumber(['4', '45', '-20', '7', '99']);
maxNumber(['1', '999']);
maxNumber(['2', '-1', '-2']);