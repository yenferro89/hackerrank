// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
function convertToMilitaryTime(time) {
    var period = time.slice(-2);
    var timePart = time.slice(0, -2);
    var _a = timePart.split(":").map(Number), hour = _a[0], minutes = _a[1], seconds = _a[2];
    if (period === "AM") {
        if (hour === 12) {
            hour = 0;
        }
    }
    else {
        if (hour !== 12) {
            hour += 12;
        }
    }
    var hourStr = padder(String(hour), 2, "0");
    var minStr = padder(String(minutes), 2, "0");
    var secStr = padder(String(seconds), 2, "0");
    return "".concat(hourStr, ":").concat(minStr, ":").concat(secStr);
}
function padder(str, targetLength, padString) {
    while (str.length < targetLength) {
        str = padString + str;
    }
    return str;
}
var time = "12:00:01AM";
console.log(convertToMilitaryTime(time));
