var lineReader = require("readline").createInterface({
    input: require("fs").createReadStream("../assets/input.txt")
});
var totalCount = 0;
lineReader.on("line", function (line) {
    console.log("Line from file:", line, typeof line);
});
lineReader.on("close", function () {
    console.log("total count", totalCount);
});
function combineNumbers(a, b) {
    var combinedNumbers = "".concat(a).concat(b);
    return parseInt(combinedNumbers);
}
//# sourceMappingURL=index.js.map