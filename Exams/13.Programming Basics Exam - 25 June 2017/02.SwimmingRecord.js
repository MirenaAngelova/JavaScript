function swimmingRecord([recordSec, distanceMeters, timeSec]) {
    recordSec = Number(recordSec);
    distanceMeters = Number(distanceMeters);
    timeSec = Number(timeSec);

    let recordIvancho = distanceMeters * timeSec;
    recordIvancho += Math.round(distanceMeters / 15) * 12.5;
    let diff = recordSec - recordIvancho;
    if (diff < 0) {
        console.log(`No, he failed! He was ${Math.abs(diff).toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${recordIvancho.toFixed(2)} seconds.`);
    }
}

swimmingRecord(['10464', '1500', '20']);
swimmingRecord(['55555.67', '3017', '5.03']);