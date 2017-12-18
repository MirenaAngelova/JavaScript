function repairTile([n, w, l, m, o]) {
    n = Number(n);
    w = Number(w);
    l = Number(l);
    m = Number(m);
    o = Number(o);

    let area = parseFloat(n * n - (m * o)) / (w * l);
    let time = parseFloat(area * 0.2);
    console.log(area.toFixed(2));
    console.log(time.toFixed(2));
}

repairTile(['20', '5', '4', '1', '2']);
repairTile(['40', '0.8', '0.6', '3', '5']);