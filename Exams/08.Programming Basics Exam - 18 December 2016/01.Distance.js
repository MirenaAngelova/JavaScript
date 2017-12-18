function distance([speed, firstTime, secondTime, thirdTime]) {
    speed = Number(speed);
    firstTime = Number(firstTime);
    secondTime = Number(secondTime);
    thirdTime = Number(thirdTime);

    let finalDistance = speed * firstTime / 60;
    speed += speed * 10 / 100;
    finalDistance += speed * secondTime / 60;
    speed -= speed * 5 / 100;
    finalDistance += speed * thirdTime / 60;

    console.log(finalDistance.toFixed(2));
}

distance(['90', '60', '70', '80']);
distance(['140', '112', '75', '190']);