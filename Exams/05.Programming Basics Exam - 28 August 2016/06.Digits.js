function digits([num]) {
    //let digitsNum = num.toString().length;
    //let firstDigit = parseInt(num / Math.pow(10, digitsNum));
    //console.log(Math.max(Math.floor(Math.log10(Math.abs(num))), 0) + 1);
    //console.log((Math.log10((num ^ (num >> 31)) - (num >> 31)) | 0) + 1);

    num = Number(num);

    //let nRows = Math.round(num / 100) + Math.round((num % 100) / 10);
    //let mCols = Math.round(num / 100) + Math.round(num % 10);
    let first = num.toString().substring(0, 1);
    let second = num.toString().substring(1, 2);
    let third = num.toString().substring(2, 3);
    let rows = Number(first) + Number(second);
    let cols = Number(first) + Number(third);

    for (let i = 0; i < rows; i++) {
        let matrixArray = [];

        for (let j = 0; j < cols; j++) {

            if (num % 5 == 0) {
                num -= Number(first);

            } else if (num % 3 == 0) {
                num -= Number(second);

            } else {
                num += Number(third);
            }

            matrixArray.push(num);
        }

        console.log(matrixArray.join(' '));


    }
}

digits(['132']);
digits(['376']);