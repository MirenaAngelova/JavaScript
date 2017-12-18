function sumNumbers(array) {
    let n = array.shift();
    let nums = array.map(Number);
    let sum = Number(0);

    for (let num of nums) {
        sum += num;
    }
    console.log(sum);
}

sumNumbers(['2', '10', '20']);
sumNumbers(['3', '-10', '-20', '-30']);
sumNumbers(['4', '45', '-20', '7', '11']);
sumNumbers(['1', '199']);
sumNumbers(['0', '0']);