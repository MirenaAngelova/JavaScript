function vowelsSum([str]) {
    let sum = Number(0);
    for (let s of str) {
        switch (s) {
            case 'a':
                sum += 1;
                break;
            case 'e':
                sum += 2;
                break;
            case 'i':
                sum += 3;
                break;
            case 'o':
                sum += 4;
                break;
            case 'u':
                sum += 5;
                break;

        }
    }

    console.log(sum);
}

vowelsSum(['hello']);
vowelsSum(['hi']);
vowelsSum(['bamboo']);
vowelsSum(['beer']);