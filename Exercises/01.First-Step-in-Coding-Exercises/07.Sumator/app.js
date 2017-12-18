function sumator() {
    let numberFirst = Number(document.getElementById('number-first').value);
    let numberSecond = Number(document.getElementById('number-second').value);

    let sum = numberFirst + numberSecond;
    document.getElementById('sum').value = sum;
}