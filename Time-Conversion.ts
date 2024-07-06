// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function convertToMilitaryTime(time: string): string {
  const period: string = time.slice(-2);
  const timePart: string = time.slice(0, -2);

  let [hour, minutes, seconds] = timePart.split(":").map(Number);

  if (period === "AM") {
    if (hour === 12) {
      hour = 0;
    }
  } else {
    if (hour !== 12) {
      hour += 12;
    }
  }

  const hourStr = padder(String(hour), 2, "0");
  const minStr = padder(String(minutes), 2, "0");
  const secStr = padder(String(seconds), 2, "0");

  return `${hourStr}:${minStr}:${secStr}`;
}

function padder(str: string, targetLength: number, padString: string): string {
  while (str.length < targetLength) {
    str = padString + str;
  }
  return str;
}

const time: string = "12:00:01AM";
console.log(convertToMilitaryTime(time));