function dayOfWeek([n]) {
    n = Number(n);
    let daysOfWeek = ['$', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday', 'Sunday'
    ];
    switch (n) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
            console.log(daysOfWeek[n]);
            break;
        default:
            console.log('error');
            break;
    }
}

dayOfWeek(['1']);
dayOfWeek(['10']);
dayOfWeek(['2']);
dayOfWeek(['3']);
dayOfWeek(['-5']);