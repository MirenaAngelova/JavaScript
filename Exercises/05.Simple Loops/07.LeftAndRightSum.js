function leftAndRightSum(array) {
    let n = array.shift();
    let nums = array.map(Number);
    let left = Number(0);
    let right = Number(0);

    for (var i = 0; i < n; i++) {
        left += nums[i];
    }

    for (var i = n; i < n * 2; i++) {
        right += nums[i];
    }

    let diff = left - right;

    if (diff == 0) {
        console.log(`Yes, sum = ${left}`);
    } else {
        console.log(`No, diff = ${Math.abs(diff)}`);
    }
}

leftAndRightSum(['2', '10', '90', '60', '40']);
leftAndRightSum(['2', '90', '9', '50', '50']);