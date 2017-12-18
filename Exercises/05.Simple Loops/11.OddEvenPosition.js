function oddEvenPosition(array) {
    let n = array.shift();
    let nums = array.map(Number);
    let odd = [];
    let even = [];

    for (let i in nums) {
        if (i % 2 == 0) {
            odd.push(nums[i]);
        } else {
            even.push(nums[i]);
        }
    }

    console.log(`OddSum=${odd.reduce(function(a, b){return a + b;}, 0)},`);
    console.log(`OddMin=${n == 0 ? 'No' : Math.min(...odd)},`);
    console.log(`OddMax=${n == 0 ? 'No' : Math.max(...odd)},`);
    console.log(`EvenSum=${even.reduce(function(a, b){return a + b;}, 0)},`);
    console.log(`EvenMin=${ n == 0  || n == 1 ? 'No' : Math.min(...even)},`);
    console.log(`EvenMax=${ n == 0  || n == 1 ? 'No' : Math.max(...even)}`);
}

oddEvenPosition(['6', '2', '3', '5', '4', '2', '1']);
oddEvenPosition(['2', '1.5', '-2.5']);
oddEvenPosition(['1', '1']);
oddEvenPosition(['0']);
oddEvenPosition(['5', '3', '-2', '8', '11', '-3']);
oddEvenPosition(['4', '1.5', '1.75', '1.5', '1.75']);
oddEvenPosition(['1', '-5']);
oddEvenPosition(['3', '-1', '-2', '-3']);