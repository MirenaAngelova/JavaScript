function sleepyCatTom(holiday) {
    holiday = Number(holiday);
    minutesPerYear = 30000;
    let realTime = (365 - holiday) * 63 + holiday * 127;

    let diff = realTime - minutesPerYear;
    let hours = parseInt(Math.abs(diff) / 60);
    let minutes = Math.abs(diff) % 60;
    if (diff > 0) {
        console.log(`Tom will run away`);
        console.log(`${hours} hours and ${minutes} minutes more for play`);

    } else if (diff < 0) {
        console.log(`Tom sleeps well`);
        console.log(`${hours} hours and ${minutes} minutes less for play`);
    }
}

sleepyCatTom(['20']);
sleepyCatTom(['113']);