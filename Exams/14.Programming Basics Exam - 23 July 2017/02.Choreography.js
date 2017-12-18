function choreography([requiredSteps, dancers, days]) {
    requiredSteps = Number(requiredSteps);
    dancers = Number(dancers);
    days = Number(days);

    let stepsDay = Math.ceil(requiredSteps / days / requiredSteps * 100);
    let stepsDancer = stepsDay / dancers;
    let diff = 13 - stepsDay;
    if (diff < 0) {

        console.log(`No, They will not succeed in that goal! ` +
            `Required ${stepsDancer.toFixed(2)}% steps to be learned per day.`);
    } else {
        console.log(`Yes, they will succeed in that goal! ${stepsDancer.toFixed(2)}%.`);

    }
}

choreography(['10464', '20', '20']);
choreography(['55555', '30', '7']);