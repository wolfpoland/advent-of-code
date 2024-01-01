import {isGamePossible, getGameId, getCubesArr} from "./utils";

const cubes = new Map<string, number>([
    ['red', 12],
    ['green', 13],
    ['blue', 14]
]);

let possibleGamesCount: number = 0;

const lineReader = require("readline").createInterface({
    input: require("fs").createReadStream("./assets/input-file.txt")
});


lineReader.on("line", function (line: string) {
    console.log("Line from file:", line);
    const gameId = getGameId(line);
    const cubesArr = getCubesArr(line);
    const gamePossible: boolean = isGamePossible(cubesArr, cubes);

    if(gamePossible) {
        console.log('adding: ', gameId);
        possibleGamesCount += gameId;
    }

    console.log('total:', possibleGamesCount);

    console.log('cubesArray: ', cubesArr);
});

lineReader.on("close", function () {
    console.log('possible games count: ', possibleGamesCount);
});
