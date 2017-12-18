function oddEvenSum(array) {
    let n = array.shift();
    let nums = array.map(Number);
    let odd = Number(0);
    let even = Number(0);

    for (let i in nums) {
        if (i % 2 == 0) {
            odd += nums[i];
        } else {
            even += nums[i];
        }
    }
    let diff = odd - even;
    if (diff == 0) {
        console.log(`Yes`);
        console.log(`Sum = ${odd}`);
    } else {
        console.log(`No`);
        console.log(`Diff = ${Math.abs(diff)}`);
    }
}
oddEvenSum(['4', '10', '50', '60', '20']);
oddEvenSum(['4', '3', '5', '1', '-2']);
oddEvenSum(['3', '5', '8', '1']);