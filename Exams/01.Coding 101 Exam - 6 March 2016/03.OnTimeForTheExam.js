function onTimeForTheExam([hourExam, minExam, hourArrival, minArrival]) {
    hourExam = Number(hourExam);
    minExam = Number(minExam);
    hourArrival = Number(hourArrival);
    minArrival = Number(minArrival);
    let minutesToString = '';
    let hours = 0;
    let minutes = 0;

    let early = 'Early';
    let onTime = 'On time';
    let late = 'Late';

    minutes = (hourArrival - hourExam) * 60 - minExam + minArrival;

    if (minutes >= 60) {
        hours = parseInt(minutes / 60);
        minutes = minutes % 60;
        console.log(late);

        if (minutes < 10) {
            minutesToString = '0' + minutes.toString();
            console.log(`${hours}:${minutesToString} hours after the start`);
        } else {
            console.log(`${hours}:${minutes} hours after the start`);
        }

    } else if (minutes > 0 && minutes < 60) {
        minutes = minutes % 60;
        console.log(late);
        console.log(`${minutes} minutes after the start`);

    } else if (minutes == 0) {
        console.log(onTime);

    } else if (minutes >= -30 && minutes < 0) {
        minutes = Math.abs(minutes) % 60;
        console.log(onTime);
        console.log(`${minutes} minutes before the start`);

    } else if (minutes > -60 && minutes < -30) {
        minutes = Math.abs(minutes) % 60;
        console.log(early);
        console.log(`${minutes} minutes before the start`);

    } else if (minutes <= -60) {
        minutes = Math.abs(minutes);
        hours = parseInt(minutes / 60);
        minutes = minutes % 60;

        console.log(early);

        if (minutes < 10) {
            minutesToString = '0' + minutes.toString();
            console.log(`${hours}:${minutesToString} hours before the start`);
        } else {
            console.log(`${hours}:${minutes} hours before the start`);
        }
    }
}

onTimeForTheExam(['9', '30', '9', '50']);
onTimeForTheExam(['9', '00', '8', '30']);
onTimeForTheExam(['16', '00', '15', '00']);
onTimeForTheExam(['9', '00', '10', '30']);
onTimeForTheExam(['14', '00', '13', '55']);
onTimeForTheExam(['11', '30', '8', '12']);
onTimeForTheExam(['10', '00', '10', '00']);
onTimeForTheExam(['11', '30', '10', '55']);
onTimeForTheExam(['11', '30', '12', '29']);