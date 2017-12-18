function thousandDaysOnEarth([birthDate]) {
    let newDate = birthDate.split('-');

    let exit = new Date(Date.UTC(newDate[2], newDate[1] - 1, newDate[0]));

    Date.UTC(exit.setDate(exit.getDate() + parseInt(1000)));

    let date = exit.toISOString();
    console.log(date.substring(8, 10) + '-' + date.substring(5, 7) + '-' + date.substring(0, 4));
}

thousandDaysOnEarth(['25-02-1995']);
thousandDaysOnEarth(['07-11-2003']);
thousandDaysOnEarth(['30-12-2002']);
thousandDaysOnEarth(['01-01-2012']);
thousandDaysOnEarth(['14-06-1980']);