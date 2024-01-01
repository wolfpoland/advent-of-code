export function getGameId(line: string): number {
    const gameSubstring = line.slice(0, line.indexOf(':'));
    const splitSubstring = gameSubstring.split(' ');

    return parseInt(splitSubstring[splitSubstring.length - 1]);
}

export function getCubesArr(line: string): Array<Array<Array<string>>> {
    const lineWithoutGamePrefix: string = line.slice(line.indexOf(':') + 1, line.length);

    return lineWithoutGamePrefix.split(';').reduce(
        (acc: Array<Array<Array<string>>>, curr: string) => {
            const subGroup: Array<Array<string>> = [];

            curr.split(',').forEach((cube: string) => {
                subGroup.push(splitCube(cube))
            })

            acc.push(subGroup);

            return acc;
        }, []);
}

function splitCube(cube: string) {
    const splitArr = cube.split(' ');
    return [splitArr[1], splitArr[2]];
}

export function isGamePossible(cubesArray: Array<Array<Array<string>>>, remainingCubes: Map<string, number>): boolean {
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

            const remainingCubeValue: number | undefined = remainingCubesCopy.get(cubeKey) ?? 0;

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
