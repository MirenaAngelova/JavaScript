function maxCombination([start, end, maxComb]) {
    start = Number(start);
    end = Number(end);
    maxComb = Number(maxComb);

    let combinations = [];
    let counter = Number(1);

    for (let first = start; first <= end; first++) {

        for (let second = start; second <= end; second++) {

            if (counter <= maxComb) {
                combinations.push(`<${first}-${second}>`);

            } else {
                break;
            }

            counter++;
        }
    }
    console.log(combinations.join(''));
}
maxCombination(['1', '4', '5']);
maxCombination(['69', '71', '100']);
maxCombination(['45', '120', '20']);