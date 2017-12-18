function excellentOrNot(grade) {
    grade = Number(grade);
    let excellent = grade >= 5.50 ? 'Excellent!' : 'Not excellent.';
    console.log(excellent);
}

excellentOrNot(['6']);
excellentOrNot(['5']);
excellentOrNot(['5.50']);
excellentOrNot(['5.49']);