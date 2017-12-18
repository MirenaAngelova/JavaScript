function grapeAndRakia([area, kilograms, wastage]) {
    area = Number(area);
    kilograms = Number(kilograms);
    wastage = Number(wastage);

    let income = area * kilograms - wastage;
    let incomeRakia = income * 45 / 100 / 7.5 * 9.80;
    let incomeGrape = income * 55 / 100 * 1.50;

    console.log(incomeRakia.toFixed(2));
    console.log(incomeGrape.toFixed(2));
}

/* var strint = require("./strint");
    strint.add("9007199254740992", "1")
    '9007199254740993' */
grapeAndRakia(['400', '10', '200']);
grapeAndRakia(['1354.73', '8.26', '531.32']);