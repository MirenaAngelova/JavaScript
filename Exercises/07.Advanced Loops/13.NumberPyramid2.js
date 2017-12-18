function numberPyramid(n) {
    let rows = Math.ceil(n / 3) + 1;
    let count = 1;
    for (let i = 0; i < rows; i++) {
        let pyramid = [];
        for (let j = 0; j < i + 1; j++) {
            if (count > n) {
                console.log(pyramid.join(''));
                return;
            }
            pyramid.push(`${count++}`);
            if (j != i) {
                pyramid.push(` `);
            }
        }
        console.log(pyramid.join(''));
    }
}

numberPyramid(3);
numberPyramid(5);
numberPyramid(7);
numberPyramid(10);
numberPyramid(15);