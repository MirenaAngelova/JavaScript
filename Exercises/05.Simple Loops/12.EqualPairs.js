function equalPairs(array) {

    let n = array.shift();
    let nums = array.map(Number);
    let maxDiff = Number(0);

    let pairs = [];

    if (n == 0) {
        console.log(`Yes, value=0`);
        return;
    }

    for (let i = 1; i < nums.length; i += 2) {
        pairs.push(nums[i - 1] + nums[i]);
    }


    for (let i = 1; i < pairs.length; i++) {
        let diff = Math.abs(pairs[i - 1] - pairs[i]);
        if (diff > maxDiff) {
            maxDiff = diff;
        }
    }

    if (n == 1 || maxDiff == 0) {
        console.log(`Yes, value=${pairs[0]}`);
    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    }
}

equalPairs(['3', '1', '2', '0', '3', '4', '-1']);
equalPairs(['4', '1', '1', '3', '1', '2', '2', '0', '0']);
equalPairs(['2', '-1', '0', '0', '-1']);
equalPairs(['2', '1', '2', '2', '2']);
equalPairs(['1', '5', '5']);
equalPairs(['2', '-1', '2', '0', '-1']);