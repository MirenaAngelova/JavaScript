function plus15Minutes([hours, minutes]) {
    hours = Number(hours);
    minutes = Number(minutes);
    minutes += 15;

    if (minutes >= 60) {
        hours += parseInt(minutes / 60);
        minutes = minutes % 60
    }

    if (hours == 24) {
        hours = 0;
    }

    if (parseInt(minutes / 10) == 0) {
        console.log(`${hours}:0${minutes}`);

    } else {
        console.log(`${hours}:${minutes}`);
    }
}

plus15Minutes(['1', '46']);
plus15Minutes(['0', '01']);
plus15Minutes(['23', '59']);
plus15Minutes(['11', '08']);
plus15Minutes(['12', '49']);