"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
describe('isGamePossible ', () => {
    it('should give possible game', () => {
        const remainingCubes = new Map([
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
        expect((0, utils_1.isGamePossible)(cubesArray, remainingCubes)).toBeTruthy();
    });
    it('should not give possible game', () => {
        const remainingCubes = new Map([
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
        expect((0, utils_1.isGamePossible)(cubesArray, remainingCubes)).toBeFalsy();
    });
    it('should give possible game with reset after 3', () => {
        const remainingCubes = new Map([
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
        expect((0, utils_1.isGamePossible)(cubesArray, remainingCubes)).toBeTruthy();
    });
    it('should give possible game with no cubes', () => {
        const remainingCubes = new Map([
            ['red', 12],
            ['green', 13],
            ['blue', 14]
        ]);
        const cubesArray = [[]];
        expect((0, utils_1.isGamePossible)(cubesArray, remainingCubes)).toBeTruthy();
    });
    it('should give possible game with one cube', () => {
        const remainingCubes = new Map([
            ['red', 12],
            ['green', 13],
            ['blue', 14]
        ]);
        const cubesArray = [
            [
                ['1', 'red']
            ]
        ];
        expect((0, utils_1.isGamePossible)(cubesArray, remainingCubes)).toBeTruthy();
    });
});
describe('getCubesArr', () => {
    it('should get cubes from line', () => {
        const line = 'Game 1: 2 red, 2 green; 6 red, 3 green; 2 red, 1 green, 2 blue; 1 red';
        expect((0, utils_1.getCubesArr)(line)).toEqual([
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
        ]);
    });
});
describe('getGameId', () => {
    it('should extract game id', () => {
        const line = 'Game 88: 5 red, 16 blue; 2 green, 14 blue, 1 red; 14 blue, 1 green';
        expect((0, utils_1.getGameId)(line)).toEqual(88);
    });
});
//# sourceMappingURL=index.test.js.map