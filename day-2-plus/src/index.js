"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
let totalFromColors = 0;
const lineReader = require("readline").createInterface({
    input: require("fs").createReadStream("./assets/input-file.txt")
});
lineReader.on("line", function (line) {
    console.log("Line from file:", line);
    const cubesArr = (0, utils_1.getCubesArr)(line);
    const maxFromEachColor = (0, utils_1.getMaxFromEachColor)(cubesArr);
    totalFromColors += (0, utils_1.multiplyCubesByColor)(maxFromEachColor);
    console.log('total:', totalFromColors);
    console.log('cubesArray: ', cubesArr);
});
lineReader.on("close", function () {
    console.log('total from colors: ', totalFromColors);
});
//# sourceMappingURL=index.js.map