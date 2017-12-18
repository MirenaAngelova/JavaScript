function sumSeconds([first, second, third]) {
    first = Number(first);
    second = Number(second);
    third = Number(third);

    let sum = first + second + third;
    let minutes = parseInt(sum / 60);
    let seconds = sum % 60;

    if (parseInt(seconds / 10) == 0) {
        console.log(`${minutes}:0${seconds}`);

    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

sumSeconds(['35', '45', '44']);
sumSeconds(['22', '7', '34']);
sumSeconds(['50', '50', '49']);
sumSeconds(['14', '12', '10']);