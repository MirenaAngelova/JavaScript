function sumator(a, b) {
    a = document.getElementById('first-digit').value;
    b = document.getElementById('second-digit').value;
    let result = Number(a) + Number(b);
    document.getElementById('sum').value = result;
}