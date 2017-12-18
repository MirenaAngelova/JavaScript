function grades(arr) {
    let grade = arr.map(Number);
    let n = grade.shift();
    let gradeTwo = Number(0);
    let gradeThree = Number(0);
    let gradeFour = Number(0);
    let gradeFive = Number(0);

    let averageGrade = Number(0);

    for (let i = 0; i < n; i++) {
        let modulusFive = parseInt(grade[i] % 5);

        switch (modulusFive) {
            case 2:
                gradeTwo++;
                break;
            case 3:
                gradeThree++;
                break;
            case 4:
                gradeFour++;
                break;
            default:
                gradeFive++;
                break;
        }
    }

    gradeTwo = gradeTwo / n * 100;
    gradeThree = gradeThree / n * 100;
    gradeFour = gradeFour / n * 100;
    gradeFive = gradeFive / n * 100;

    for (let g of grade) {
        averageGrade += g;
    }

    averageGrade /= n;

    console.log(`Top students: ${gradeFive.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${gradeFour.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${gradeThree.toFixed(2)}%`);
    console.log(`Fail: ${gradeTwo.toFixed(2)}%`);
    console.log(`Average: ${averageGrade.toFixed(2)}`);
}

grades(['10', '3.00', '2.99', '5.68', '3.01', '4', '4', '6.00', '4.50', '2.44', '5']);
grades(['6', '2', '3', '4', '5', '6', '2.2']);