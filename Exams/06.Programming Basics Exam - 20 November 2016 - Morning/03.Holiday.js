function holiday([oldPeople, pupils, nights, transport]) {
    oldPeople = Number(oldPeople);
    pupils = Number(pupils);
    let transportLength = transport.length;

    let holidayPackage = parseFloat(0);
    let transportOld = parseFloat(0);
    let transportPupil = parseFloat(0);

    switch (transportLength) {
        case 5:
            transportOld = 24.99;
            transportPupil = 14.99;
            if ((oldPeople + pupils) >= 50) {
                transportOld -= transportOld * 50 / 100;
                transportPupil -= transportPupil * 50 / 100;
            }
            break;
        case 3:
            transportOld = 32.50;
            transportPupil = 28.50;
            break;
        case 4:
            transportOld = 42.99;
            transportPupil = 39.99;
            break;
        case 8:
            transportOld = 70.00;
            transportPupil = 50.00;
            break;

    }

    holidayPackage = (oldPeople * transportOld + pupils * transportPupil) * 2 +
        nights * 82.99;
    holidayPackage += holidayPackage * 10 / 100;

    console.log(holidayPackage.toFixed(2));
}

holiday(['10', '5', '7', 'airplane']);
holiday(['10', '5', '7', 'train']);
holiday(['10', '50', '7', 'train']);
holiday(['10', '10', '1', 'boat']);
holiday(['3', '40', '15', 'bus']);