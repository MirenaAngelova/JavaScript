function trainersSalary(array) {

    let trainers = array.map(function(item) {
        return item.toString();
    });
    let lectures = Number(trainers.shift());
    let budget = Number(trainers.shift());

    let jelev = Number(0);
    let royaL = Number(0);
    let roli = Number(0);
    let trofon = Number(0);
    let sino = Number(0);
    let others = Number(0);

    for (let trainer of trainers) {
        switch (trainer) {
            case 'Jelev':
                jelev++;
                break;
            case 'RoYaL':
                royaL++;
                break;
            case 'Roli':
                roli++;
                break;
            case 'Trofon':
                trofon++;
                break;
            case 'Sino':
                sino++;
                break;
            default:
                others++;
                break;
        }
    }

    budget /= lectures;

    console.log(`Jelev salary: ${(jelev * budget).toFixed(2)} lv`);
    console.log(`RoYaL salary: ${(royaL * budget).toFixed(2)} lv`);
    console.log(`Roli salary: ${(roli * budget).toFixed(2)} lv`);
    console.log(`Trofon salary: ${(trofon * budget).toFixed(2)} lv`);
    console.log(`Sino salary: ${(sino * budget).toFixed(2)} lv`);
    console.log(`Others salary: ${(others * budget).toFixed(2)} lv`);
}

trainersSalary(['9', '1500', 'Roli', 'Trofon', 'Sino', 'Bai Ivan Ivanov', 'Jelev', 'Trofon', 'Sino',
    'Sino', 'RoYaL'
]);
trainersSalary(['4', '750.50', 'Bai Ivan Ivanov', 'Bai Ivan Ivanov', 'Bai Ivan Ivanov', 'Roli']);