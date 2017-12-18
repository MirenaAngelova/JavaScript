function partitionWithoutResidue(arr) {
    let array = arr.map(Number);
    let n = array.shift();

    let partitionTwo = 0;
    let partitionThree = 0;
    let partitionFour = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;

    array.forEach(function(element) {
        if (element % 4 == 0) {
            partitionTwo++;
            partitionFour++;
        } else if (element % 2 == 0) {
            partitionTwo++;
        }

        if (element % 3 == 0) {
            partitionThree++;
        }
    });

    p2 = partitionTwo / n * 100;
    console.log(p2.toFixed(2) + '%');

    p3 = partitionThree / n * 100;
    console.log(p3.toFixed(2) + '%');

    p4 = partitionFour / n * 100;
    console.log(p4.toFixed(2) + '%');
}

partitionWithoutResidue(['10', '680', '2', '600', '200', '800', '799', '199', '46', '128', '65']);
partitionWithoutResidue(['3', '3', '6', '9']);