import {Colors, getCubesArr, getMaxFromEachColor} from "./utils";


describe('getCubesArr', () => {
    it('should get cubes from line', () => {
        const line: string = 'Game 1: 2 red, 2 green; 6 red, 3 green; 2 red, 1 green, 2 blue; 1 red';

        expect(getCubesArr(line)).toEqual([

            ['2', 'red'],
            ['2', 'green'],

            ['6', 'red'],
            ['3', 'green'],

            ['2', 'red'],
            ['1', 'green'],
            ['2', 'blue'],

            ['1', 'red']
        ])
    })
})

describe('getMaxFromEachColor', () => {
    it('should satisfy expected scenario', () => {
        const cubes: Array<[string,  Colors]> = [
            ['3', 'blue'],
            ['4', 'red'],
            ['1', 'red'],
            ['2', 'green'],
            ['6', 'blue'],
            ['2', 'green'],
        ];

        expect(Array.from(getMaxFromEachColor(cubes)))
            .toEqual([
                ['blue', 6],
                ['red', 4],
                ['green', 2]
            ])
    });
})
