function numberPyramid(n) {
    let rowsIncrease = Math.ceil(n / 3);
    let count = 1;
    let isFound = false;
    increase(n);
    if (!isFound) {
        decrease(n);
    }

    function increase(n) {
        for (let i = 0; i < rowsIncrease; i++) {
            let pyramid = [];
            for (let j = 0; j < 1 + i; j++) {
                pyramid.push(`${count++}`);

                if (count > n) {
                    isFound = true;
                    console.log(pyramid.join(''));
                    return;
                }
                if (j != i) {
                    pyramid.push(' ');
                }
            }
            console.log(pyramid.join(''));
        }
    }


    function decrease(n) {
        for (let i = rowsIncrease; i >= 0; i--) {
            let pyramid = [];
            for (let j = i - 1; j >= 0; j--) {
                pyramid.push(`${count++}`);

                if (count > n) {
                    console.log(pyramid.join(''));
                    return;
                }
                if (j != i) {
                    pyramid.push(' ');
                }
            }
            console.log(pyramid.join(''));
        }
    }
}
numberPyramid(3);
// numberPyramid(7);
// numberPyramid(10);
// numberPyramid(12);
// numberPyramid(15);