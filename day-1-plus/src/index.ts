type Entry = { value: string, isNumber: boolean };

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

    const entries: Map<number, Entry> = new Map<number, Entry>();
    const splitArray = line.split("");
    let stringBuffer: string = '';

    for (let i = 0; i < splitArray.length; i++) {
        const value = splitArray[i];
        const itsANumber: boolean = isNumber(value);

        if (itsANumber) {
            entries.set(i, {
                value,
                isNumber: itsANumber
            });

            continue;
        }

        stringBuffer += value;

        mapWordsToNumbersMap.forEach((_: number, key: string) => {
            const index = stringBuffer.length - 1;

            if (stringBuffer.includes(key)) {
                entries.set(i, {
                    value: key,
                    isNumber: false
                });

                stringBuffer = stringBuffer.slice(0, index - (key.length - 1)) + value;
            }
        })
    }

    const maxKey = Math.max(...entries.keys());
    const minKey = Math.min(...entries.keys());

    const minEntry = entries.get(minKey);
    const maxEntry = entries.get(maxKey);

    return combineNumbers(
        minEntry.isNumber ? minEntry.value : mapWordsToNumbersMap.get(minEntry.value),
        maxEntry.isNumber ? maxEntry.value : mapWordsToNumbersMap.get(maxEntry.value),
    );
}

function isNumber(word: string) {
    return !isNaN(parseInt(word));
}

function combineNumbers(a: string | number, b: string | number): number {
    const combinedNumbers = `${a}${b}`;

    return parseInt(combinedNumbers);
}
