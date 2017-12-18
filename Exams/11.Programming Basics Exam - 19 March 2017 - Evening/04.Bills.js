function bills(array) {
    let electircityMonth = array.map(Number);
    let months = electircityMonth.shift();

    let electricity = Number(0);
    let water = Number(20);
    let internet = Number(15);
    let other = Number(0);
    let average = Number(0);

    for (let e of electircityMonth) {
        electricity += e;
    }

    water *= months;
    internet *= months;
    other = electricity + water + internet;
    other += other * 20 / 100;
    average = (electricity + water + internet + other) / months;

    console.log(`Electricity: ${electricity.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${other.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);
}
bills(['5', '68.63', '89.25', '132.53', '93.53', '63.22']);
bills(['8', '123.54', '231.54', '140.23', '100', '122.4', '430', '178.52', '64.2']);