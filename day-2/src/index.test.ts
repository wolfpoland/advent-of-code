import {getCubesArr, getGameId, isGamePossible} from "./utils";

describe('isGamePossible ', () => {
    it('should give possible game', () => {
        const remainingCubes = new Map<string, number>([
            ['red', 12],
            ['green', 13],
            ['blue', 14]
        ]);

        const cubesArray = [
            [
                ['12', 'red'],
                ['13', 'green'],
                ['14', 'blue'],
            ],
            [
                ['12', 'red'],
                ['13', 'green'],
                ['14', 'blue'],
            ],
            [
                ['12', 'red'],
                ['13', 'green'],
                ['14', 'blue'],
            ]
        ];

        expect(isGamePossible(cubesArray, remainingCubes)).toBeTruthy();
    })

    it('should not give possible game', () => {
        const remainingCubes = new Map<string, number>([
            ['red', 12],
            ['green', 13],
            ['blue', 14]
        ]);

        const cubesArray = [
            [
                ['12', 'red'],
                ['1', 'blue'],
                ['14', 'blue'],
            ]
        ];

        expect(isGamePossible(cubesArray, remainingCubes)).toBeFalsy();
    })

    it('should give possible game with reset after 3', () => {
        const remainingCubes = new Map<string, number>([
            ['red', 12],
            ['green', 13],
            ['blue', 14]
        ]);

        const cubesArray = [
            [
                ['12', 'red'],
                ['1', 'green'],
                ['14', 'blue'],
            ],
            [
                ['14', 'blue'],
            ]
        ];

        expect(isGamePossible(cubesArray, remainingCubes)).toBeTruthy();
    })

    it('should give possible game with no cubes', () => {
        const remainingCubes = new Map<string, number>([
            ['red', 12],
            ['green', 13],
            ['blue', 14]
        ]);

        const cubesArray: Array<Array<Array<string>>> = [[]];

        expect(isGamePossible(cubesArray, remainingCubes)).toBeTruthy();
    })

    it('should give possible game with one cube', () => {
        const remainingCubes = new Map<string, number>([
            ['red', 12],
            ['green', 13],
            ['blue', 14]
        ]);

        const cubesArray: Array<Array<Array<string>>> = [
            [
                ['1', 'red']
            ]
        ]

        expect(isGamePossible(cubesArray, remainingCubes)).toBeTruthy();
    })

})

describe('getCubesArr', () => {
    it('should get cubes from line', () => {
        const line: string = 'Game 1: 2 red, 2 green; 6 red, 3 green; 2 red, 1 green, 2 blue; 1 red';

        expect(getCubesArr(line)).toEqual([
            [
                ['2', 'red'],
                ['2', 'green'],
            ],
            [
                ['6', 'red'],
                ['3', 'green'],
            ],
            [
                ['2', 'red'],
                ['1', 'green'],
                ['2', 'blue'],
            ],
            [
                ['1', 'red']
            ]
        ])
    })
})

describe('getGameId', () => {

    it('should extract game id', () => {
        const line = 'Game 88: 5 red, 16 blue; 2 green, 14 blue, 1 red; 14 blue, 1 green';

        expect(getGameId(line)).toEqual(88);
    })
});
