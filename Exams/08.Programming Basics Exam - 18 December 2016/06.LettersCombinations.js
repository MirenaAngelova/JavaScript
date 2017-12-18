function lettersCombinations([start, end, ignore]) {
    let letters = [];
    let combinations = [];
    let count = Number(0);

    start = start.charCodeAt(0);
    end = end.charCodeAt(0);
    ignore = ignore.charCodeAt(0);
    for (var i = start; i <= end; i++) {
        if (i == ignore) {
            continue;
        }

        letters.push(String.fromCharCode(i));
    }

    for (let first of letters) {

        for (let second of letters) {

            for (let third of letters) {

                combinations.push(first + second + third);
                count++;
            }
        }
    }

    combinations.push(count);
    console.log(combinations.join(' '));
}

lettersCombinations(['a', 'c', 'b']);
lettersCombinations(['f', 'k', 'h']);
lettersCombinations(['a', 'c', 'z']);