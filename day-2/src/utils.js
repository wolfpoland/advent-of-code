"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isGamePossible = exports.getCubesArr = exports.getGameId = void 0;
function getGameId(line) {
    const gameSubstring = line.slice(0, line.indexOf(':'));
    const splitSubstring = gameSubstring.split(' ');
    return parseInt(splitSubstring[splitSubstring.length - 1]);
}
exports.getGameId = getGameId;
function getCubesArr(line) {
    const lineWithoutGamePrefix = line.slice(line.indexOf(':') + 1, line.length);
    return lineWithoutGamePrefix.split(';').reduce((acc, curr) => {
        const subGroup = [];
        curr.split(',').forEach((cube) => {
            subGroup.push(splitCube(cube));
        });
        acc.push(subGroup);
        return acc;
    }, []);
}
exports.getCubesArr = getCubesArr;
function splitCube(cube) {
    const splitArr = cube.split(' ');
    return [splitArr[1], splitArr[2]];
}
function isGamePossible(cubesArray, remainingCubes) {
    let remainingCubesCopy = new Map(remainingCubes);
    for (let n = 0; n < cubesArray.length; n++) {
        const cubesSubGroup = cubesArray[n];
        remainingCubesCopy = new Map(remainingCubes);
        for (let m = 0; m < cubesSubGroup.length; m++) {
            const cube = cubesSubGroup[m];
            const [cubeValueString, cubeKey] = cube.filter(Boolean);
            const cubeValue = parseInt(cubeValueString);
            if (!remainingCubesCopy.has(cubeKey)) {
                return false;
            }
            const remainingCubeValue = remainingCubesCopy.get(cubeKey) ?? 0;
            if (remainingCubeValue < cubeValue) {
                return false;
            }
            const calc = remainingCubeValue - cubeValue;
            if (calc < 0) {
                return false;
            }
            remainingCubesCopy.set(cubeKey, calc);
        }
    }
    return true;
}
exports.isGamePossible = isGamePossible;
//# sourceMappingURL=utils.js.map