"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplyCubesByColor = exports.getMaxFromEachColor = exports.getCubesArr = void 0;
function getCubesArr(line) {
    const lineWithoutGamePrefix = line.slice(line.indexOf(':') + 1, line.length);
    return lineWithoutGamePrefix.split(';').reduce((acc, curr) => {
        curr.split(',').forEach((cube) => {
            acc.push(splitCube(cube));
        });
        return acc;
    }, []);
}
exports.getCubesArr = getCubesArr;
function splitCube(cube) {
    const splitArr = cube.split(' ');
    return [splitArr[1], splitArr[2]];
}
function getMaxFromEachColor(cubesArray) {
    const maxColorMap = new Map();
    for (let n = 0; n < cubesArray.length; n++) {
        const cube = cubesArray[n];
        const [cubeValueString, cubeKey] = cube;
        const cubeValue = parseInt(cubeValueString);
        if (!maxColorMap.has(cubeKey)) {
            maxColorMap.set(cubeKey, cubeValue);
        }
        const maxColor = maxColorMap.get(cubeKey);
        if (!maxColor) {
            continue;
        }
        if (cubeValue > maxColor) {
            maxColorMap.set(cubeKey, cubeValue);
        }
    }
    return maxColorMap;
}
exports.getMaxFromEachColor = getMaxFromEachColor;
function multiplyCubesByColor(maxCubeColorMap) {
    const red = maxCubeColorMap.get('red') ?? 1;
    const blue = maxCubeColorMap.get('blue') ?? 1;
    const green = maxCubeColorMap.get('green') ?? 1;
    return red * blue * green;
}
exports.multiplyCubesByColor = multiplyCubesByColor;
//# sourceMappingURL=utils.js.map