import {Colors, getCubesArr, getMaxFromEachColor, multiplyCubesByColor} from "./utils";
let totalFromColors: number = 0;

const lineReader = require("readline").createInterface({
    input: require("fs").createReadStream("./assets/input-file.txt")
});


lineReader.on("line", function (line: string) {
    console.log("Line from file:", line);
    const cubesArr = getCubesArr(line);
    const maxFromEachColor = getMaxFromEachColor(cubesArr as Array<[string, Colors]>);
    totalFromColors += multiplyCubesByColor(maxFromEachColor);

    console.log('total:', totalFromColors);

    console.log('cubesArray: ', cubesArr);
});

lineReader.on("close", function () {
    console.log('total from colors: ', totalFromColors);
});
