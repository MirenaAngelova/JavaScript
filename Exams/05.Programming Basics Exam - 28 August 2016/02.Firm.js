function firm([neededHours, availableDays, employees]) {
    neededHours = Number(neededHours);
    availableDays = Number(availableDays);
    employees = Number(employees);

    let workingHours = (availableDays * (1 - 10 / 100)) * 8 + availableDays * 2 * employees;

    let diff = workingHours - neededHours;
    if (diff < 0) {

        console.log(`Not enough time!${Math.abs(Math.floor(diff))} hours needed.`)
    } else {

        console.log(`Yes!${Math.floor(diff)} hours left.`)
    }
}

firm(['90', '7', '3']);
firm(['99', '3', '1']);