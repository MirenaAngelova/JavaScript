function metricConverter([n, entrance, exit]) {
    n = Number(n);
    entrance = entrance.toString();
    exit = exit.toString();
    let converter = {
        m: 1,
        mm: 1000,
        cm: 100,
        mi: 0.000621371192,
        in: 39.3700787,
        km: 0.001,
        ft: 3.2808399,
        yd: 1.0936133
    };
    let convert = n * converter[exit] / converter[entrance];
    console.log(`${convert.toFixed(8)} ${exit}`);
}
metricConverter(['12', 'mm', 'cm']);
metricConverter(['12', 'km', 'ft']);
metricConverter(['150', 'mi', 'in']);
metricConverter(['450', 'yd', 'km']);