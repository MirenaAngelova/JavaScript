function personalTitles([age, gender]) {
    age = Number(age);
    gender = gender.toString();
    if (age < 16) {
        console.log(gender == 'f' ? 'Miss' : 'Master');
    } else {
        console.log(gender == 'f' ? 'Ms.' : 'Mr.');
    }
}

personalTitles(['12', 'f']);
personalTitles(['17', 'm']);
personalTitles(['25', 'f']);
personalTitles(['13.5', 'm']);