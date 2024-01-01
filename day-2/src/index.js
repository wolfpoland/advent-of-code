"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const cubes = new Map([
    ['red', 12],
    ['green', 13],
    ['blue', 14]
]);
let possibleGamesCount = 0;
const lineReader = require("readline").createInterface({
    input: require("fs").createReadStream("./assets/input-file.txt")
});
lineReader.on("line", function (line) {
    console.log("Line from file:", line);
    const gameId = (0, utils_1.getGameId)(line);
    const cubesArr = (0, utils_1.getCubesArr)(line);
    const gamePossible = (0, utils_1.isGamePossible)(cubesArr, cubes);
    if (gamePossible) {
        console.log('adding: ', gameId);
        possibleGamesCount += gameId;
    }
    console.log('total:', possibleGamesCount);
    console.log('cubesArray: ', cubesArr);
});
lineReader.on("close", function () {
    console.log('possible games count: ', possibleGamesCount);
});
//# sourceMappingURL=index.js.map