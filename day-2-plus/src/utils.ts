export type Colors = 'red' | 'blue' | 'green';

export function getCubesArr(line: string): Array<Array<string>> {
    const lineWithoutGamePrefix: string = line.slice(line.indexOf(':') + 1, line.length);

    return lineWithoutGamePrefix.split(';').reduce(
        (acc: Array<Array<string>>, curr: string) => {
            curr.split(',').forEach((cube: string) => {
                acc.push(splitCube(cube));
            })

            return acc;
        }, []);
}

function splitCube(cube: string) {
    const splitArr = cube.split(' ');
    return [splitArr[1], splitArr[2]];
}

export function getMaxFromEachColor(cubesArray: Array<[string, Colors]>): Map<Colors, number> {
    const maxColorMap = new Map<Colors, number>();

    for (let n = 0; n < cubesArray.length; n++) {
        const cube = cubesArray[n];
        const [cubeValueString, cubeKey]: [string, Colors] = cube;
        const cubeValue = parseInt(cubeValueString);

        if (!maxColorMap.has(cubeKey)) {
            maxColorMap.set(cubeKey, cubeValue);
        }

        const maxColor = maxColorMap.get(cubeKey);

        if(!maxColor) {
            continue;
        }

        if(cubeValue > maxColor) {
            maxColorMap.set(cubeKey, cubeValue);
        }

    }


    return maxColorMap;
}

export function multiplyCubesByColor(maxCubeColorMap: Map<Colors, number>): number {
    const red = maxCubeColorMap.get('red') ?? 1;
    const blue = maxCubeColorMap.get('blue') ?? 1;
    const green =maxCubeColorMap.get('green') ?? 1;

    return red * blue * green;
}
