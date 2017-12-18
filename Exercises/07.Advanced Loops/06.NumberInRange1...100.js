function numberInRange(enteredNum) {
    let count = 0;
    while (enteredNum[count] < 1 || enteredNum[count] > 100) {
        console.log(`Invalid number!`);
        count++;
    }
    console.log(`The number is: ${enteredNum[count]}`);
}
//numberInRange(35, 4, 5);
numberInRange([105, 0, -200, 77]);