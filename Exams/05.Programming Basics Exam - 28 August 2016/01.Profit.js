function profit([n, m, usd]) {
    n = Number(n); //days a month
    m = parseFloat(m); //usd a day
    usd = parseFloat(usd); // usd to bgn

    let monthlySalaryBgn = n * m * usd;
    let bonus = monthlySalaryBgn * 2.5;

    let annualIncome = monthlySalaryBgn * 12 + bonus;



    let dailySalaryBgn = (annualIncome * (1 - 25 / 100)) / 365;

    console.log(dailySalaryBgn.toFixed(2));
}

profit(['21', '75.00', '1.59']);
profit(['15', '105', '1.71']);