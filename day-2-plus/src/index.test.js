"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
describe('getCubesArr', () => {
    it('should get cubes from line', () => {
        const line = 'Game 1: 2 red, 2 green; 6 red, 3 green; 2 red, 1 green, 2 blue; 1 red';
        expect((0, utils_1.getCubesArr)(line)).toEqual([
            ['2', 'red'],
            ['2', 'green'],
            ['6', 'red'],
            ['3', 'green'],
            ['2', 'red'],
            ['1', 'green'],
            ['2', 'blue'],
            ['1', 'red']
        ]);
    });
});
describe('getMaxFromEachColor', () => {
    it('should satisfy expected scenario', () => {
        const cubes = [
            ['3', 'blue'],
            ['4', 'red'],
            ['1', 'red'],
            ['2', 'green'],
            ['6', 'blue'],
            ['2', 'green'],
        ];
        expect(Array.from((0, utils_1.getMaxFromEachColor)(cubes)))
            .toEqual([
            ['blue', 6],
            ['red', 4],
            ['green', 2]
        ]);
    });
});
//# sourceMappingURL=index.test.js.map