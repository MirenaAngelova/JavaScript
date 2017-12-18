function halfSumElement(array) {

    let n = array.shift();
    let nums = array.map(Number);

    let maxNum = Math.max(...nums);
    let sum = nums.reduce(function(a, b) {
        return a + b;
    }, 0);

    if (sum == 2 * maxNum) {
        console.log(`Yes`);
        console.log(`Sum = ${maxNum}`);
    } else {
        console.log(`No`);
        console.log(`Diff = ${Math.abs(sum - 2 * maxNum)}`);
    }

}


halfSumElement(['7', '3', '4', '1', '1', '2', '12', '1']);
halfSumElement(['4', '6', '1', '2', '3']);
halfSumElement(['3', '1', '1', '10']);
halfSumElement(['3', '5', '5', '1']);
halfSumElement(['3', '1', '1', '1']);