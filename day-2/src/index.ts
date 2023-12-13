type ReplaceArray = Array<{ value: string, index: number }>;

const mapWordsToNumbersMap = new Map([
    ["one", 1],
    ["two", 2],
    ["three", 3],
    ["four", 4],
    ["five", 5],
    ["six", 6],
    ["seven", 7],
    ["eight", 8],
    ["nine", 9],
])


const lineReader = require("readline").createInterface({
    input: require("fs").createReadStream("./assets/input-file.txt")
});

let totalCount = 0;

lineReader.on("line", function (line: string) {
    console.log("Line from file:", line);
    const combinedNumber = extractCombinedNumbersFromLine(line);
    totalCount += combinedNumber;
    console.log("combinedNumber", combinedNumber);
});

lineReader.on("close", function () {
    console.log("total count", totalCount);
});

function extractCombinedNumbersFromLine(line: string): number {
    const firstChar = line.charAt(0);
    const lastChar = line.charAt(line.length - 1);


    if ((isNumber(firstChar) && isNumber(lastChar))) {
        return combineNumbers(firstChar, lastChar);
    }

    const mappedLine = mapWordsToNumbersInLine(line);
    // console.log('line', line, 'mappedline', mappedLine);

    const collectedNumbers = mappedLine.split("").reduce((acc: Array<string>, curr: string) => {

        if (isNumber(curr)) {
            acc.push(curr);
        }

        return acc;
    }, []);

    if (collectedNumbers.length === 1) {
        return combineNumbers(
            collectedNumbers[0],
            collectedNumbers[0]
        );
    }

    return combineNumbers(
        collectedNumbers[0],
        collectedNumbers[collectedNumbers.length - 1]
    );
}

function isNumber(word: string) {
    return !isNaN(parseInt(word));
}

function mapWordsToNumbersInLine(line: string) {
    let replaceArray: ReplaceArray = [];
    let replacedLine = line;

    mapWordsToNumbersMap.forEach((value, key) => {
        // replacedLine = line;
        let position = 0;

        while (replacedLine.includes(key, position)) {
            const slice = replacedLine.slice(position);
            const index = Math.abs(slice.indexOf(key) + position);
            replaceArray.push({value: key, index});
            position = index + key.length;
        }
    });

    if (!replaceArray?.length) {
        return line;
    }

    sortReplaceArray(replaceArray);
    replaceArray = removeOverlaps2(replaceArray)

    // console.log('replace array: ', replaceArray);


    const firstElementToReplace = replaceArray[0];
    const lastElementToReplace = replaceArray[replaceArray.length - 1];
    const firstMappedNumber = mapWordsToNumbersMap.get(firstElementToReplace.value)?.toString();
    const lastElementIndex = lastElementToReplace.index - (firstElementToReplace.value.length - 1);
    const lastMappedNumber = mapWordsToNumbersMap.get(lastElementToReplace.value)?.toString()

    if (replaceArray.length === 1) {
        return replaceInString(firstElementToReplace.index, replacedLine, firstElementToReplace.value, firstMappedNumber);
    }

    replacedLine = replaceInString(firstElementToReplace.index, replacedLine, firstElementToReplace.value, firstMappedNumber);
    replacedLine = replaceInString(lastElementIndex, replacedLine, lastElementToReplace.value, lastMappedNumber);

    return replacedLine;
}

function sortReplaceArray(replaceArray: ReplaceArray): void {
    replaceArray.sort((a, b) => {
        if (a.index > b.index) {
            return 1;
        } else if (a.index < b.index) {
            return -1;
        } else {
            return 0;
        }
    });
}

function removeOverlaps2(replaceArray: ReplaceArray): ReplaceArray {
    if(replaceArray.length < 2) {
        return replaceArray;
    }

    const shallowCopy = [...replaceArray];
    const minReplaceItem = shallowCopy[0];
    const minReplaceNextItem = shallowCopy[1];

    if (minReplaceItem.index + minReplaceItem.value.length > minReplaceNextItem.index) {
        shallowCopy[1] = null;
    }

    if(replaceArray.length < 4) {
        console.log('shallowCopy', shallowCopy, replaceArray)
        return shallowCopy.filter(Boolean);
    }

    const maxReplaceItem = shallowCopy[shallowCopy.length - 1];
    const maxReplacePrevItem = shallowCopy[shallowCopy.length - 2];

    if (maxReplacePrevItem.index + maxReplacePrevItem.value.length > maxReplaceItem.index) {
        shallowCopy[shallowCopy.length - 2] = null;
    }

    console.log('shallowCopy2', shallowCopy, replaceArray)
    return shallowCopy.filter(Boolean);
}

function replaceInString(startIndex: number, replaceIn: string, value: string, valueToReplace: string) {
    const endIndex = startIndex + value.length;
    const replacedString = `${replaceIn.slice(0, startIndex)}${valueToReplace}${replaceIn.slice(endIndex)}`;
    // console.log('replacedString', replacedString);

    return replacedString;

}

function combineNumbers(a: string, b: string): number {
    const combinedNumbers = `${a}${b}`;

    return parseInt(combinedNumbers);
}
