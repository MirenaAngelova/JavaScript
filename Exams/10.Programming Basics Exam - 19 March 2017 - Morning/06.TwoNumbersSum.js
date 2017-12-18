function twoNumbersSum([start, end, magic]) {
    start = Number(start);
    end = Number(end);
    magic = Number(magic);

    counter = Number(0);

    for (let first = start; first >= end; first--) {

        for (let second = start; second >= end; second--) {

            counter++;
            if (first + second == magic) {
                console.log(`Combination N:${counter} (${first} + ${second} = ${magic})`);
                return;
            }
        }
    }

    console.log(`${counter} combinations - neither equals ${magic}`);
}

twoNumbersSum(['10', '1', '5']);
twoNumbersSum(['24', '23', '20']);
twoNumbersSum(['888', '88', '1000']);
twoNumbersSum(['888', '88', '2000']);