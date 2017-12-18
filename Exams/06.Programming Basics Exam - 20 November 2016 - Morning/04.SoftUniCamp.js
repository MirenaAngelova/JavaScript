function softuniCamp(arr) {
    let students = arr.map(Number);
    let n = students.shift();

    let car = Number(0);
    let van = Number(0);
    let minibus = Number(0);
    let largeBus = Number(0);
    let train = Number(0);

    let travel = parseFloat(0);

    for (let student of students) {
        if (student >= 1 && student <= 5) {
            car += student;

        } else if (student >= 6 && student <= 12) {
            van += student;

        } else if (student >= 13 && student <= 25) {
            minibus += student;

        } else if (student >= 26 && student <= 40) {
            largeBus += student;

        } else {
            train += student;
        }
    }

    travel = car + van + minibus + largeBus + train;

    console.log((car / travel * 100).toFixed(2) + '%');
    console.log((van / travel * 100).toFixed(2) + '%');
    console.log((minibus / travel * 100).toFixed(2) + '%');
    console.log((largeBus / travel * 100).toFixed(2) + '%');
    console.log((train / travel * 100).toFixed(2) + '%');
}

softuniCamp(['10', '10', '5', '1', '100', '12', '26', '17', '37', '40', '78']);
softuniCamp(['5', '25', '41', '31', '250', '6']);