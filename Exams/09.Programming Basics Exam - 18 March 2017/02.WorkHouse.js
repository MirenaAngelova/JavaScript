function workHouse([neededHours, workers, days]) {
    neededHours = Number(neededHours);
    workers = Number(workers);
    days = Number(days);

    let hoursWorked = workers * days * 8;
    let diff = neededHours - hoursWorked;
    if (diff > 0) {
        let penalties = diff * days;
        console.log(`${diff} overtime`);
        console.log(`Penalties: ${penalties}`);

    } else {
        console.log(`${Math.abs(diff)} hours left`);
    }
}

workHouse(['1000', '10', '20']);
workHouse(['2000', '10', '20']);