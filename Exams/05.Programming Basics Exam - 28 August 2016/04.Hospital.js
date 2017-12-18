function hospital(arr) {
    let hospital = arr.map(Number);
    let period = hospital.shift();
    let untreatedPatients = Number(0);
    let treatedPatients = Number(0);
    let doctors = Number(7);

    let patients = Number(0);
    let untreated = Number(0);
    let treated = Number(0);


    let count = 1;
    for (let i = 0; i < period; i++) {

        patients = hospital[i];
        untreatedPatients += Math.max((patients - doctors), 0);
        treatedPatients += Math.min(doctors, patients);

        untreated += Math.max((patients - doctors), 0);
        treated += Math.min(doctors, patients);

        if ((count + 1) % 3 == 0) {

            if (untreatedPatients > treatedPatients) {
                doctors++;

            } else if (untreatedPatients <= treatedPatients && doctors > 7) {
                doctors--;
            }
            untreatedPatients = 0;
            treatedPatients = 0;
        }
        count++;
    }

    console.log(`Treated patients: ${treated}.`);
    console.log(`Untreated patients: ${untreated}.`);
}

hospital(['4', '7', '27', '9', '1']);
hospital(['6', '25', '25', '25', '25', '25', '2']);
hospital(['23', '1', '2', '3', '4', '5', '6', '7', '8', '9', '11', '111', '111', '1', '1', '1',
    '3', '6', '7', '90', '400', '4567', '222', '22'
]);