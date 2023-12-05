var lineReader = require("readline").createInterface({
  input: require("fs").createReadStream("input-file.txt"),
});
let totalCount = 0;

lineReader.on("line", function (line) {
  console.log("Line from file:", line);
  const combinedNumber = extractCombinedNumbersFromLine(line);
  totalCount += combinedNumber;
  console.log("combinedNumber", combinedNumber);
});

lineReader.on("close", function () {
  console.log("total count", totalCount);
});

function extractCombinedNumbersFromLine(line) {
  const collectedNumbers = line.split("").reduce((acc, curr) => {
    if (!isNaN(curr)) {
      acc.push(curr);
    }

    return acc;
  }, []);

  if (collectedNumbers.length === 1) {
    return combineNumbers(collectedNumbers[0], collectedNumbers[0]);
  }

  return combineNumbers(
    collectedNumbers[0],
    collectedNumbers[collectedNumbers.length - 1]
  );
}

function combineNumbers(a, b) {
  const combinedNumbers = `${a}${b}`;

  return parseInt(combinedNumbers);
}
