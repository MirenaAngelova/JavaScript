function celsiusToFahrenheit([celsius]) {
    celsius = Number(celsius);
    let fahrenheit = 0;

    fahrenheit = celsius * 1.8 + 32;
    fahrenheit = Math.round(fahrenheit * 100) / 100;
    console.log(fahrenheit);
}

celsiusToFahrenheit(['25']);
celsiusToFahrenheit(['0']);
celsiusToFahrenheit(['-5.5']);
celsiusToFahrenheit(['32.3']);
