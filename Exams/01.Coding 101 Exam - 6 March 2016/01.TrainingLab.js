function trainingLab([width, height]) {
    width = Number(width);
    height = Number(height);

    const widthWorkplace = 120 / 100;
    const heightWorkplace = 70 / 100;
    const entranceDesk = 3;
    const heightCorridor = 100 / 100;

    let countWidth = parseInt(width / widthWorkplace);
    let countHeight = parseInt((height - heightCorridor) / heightWorkplace);

    let countOfWorkplaces = (countWidth * countHeight) - entranceDesk;

    console.log(countOfWorkplaces);
}

trainingLab(['15', '8.9']);
trainingLab(['8.4', '5.2']);