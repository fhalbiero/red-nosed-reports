/**
Numbers must be either increasing or decreasing, and adjacent numbers must differ by 1 to 3 to be considered safe.

7 6 4 2 1: Safe because the levels are all decreasing by 1 or 2.
1 2 7 8 9: Unsafe because 2 7 is an increase of 5.
9 7 6 2 1: Unsafe because 6 2 is a decrease of 4.
1 3 2 4 5: Unsafe because 1 3 is increasing but 3 2 is decreasing.
8 6 4 4 1: Unsafe because 4 4 is neither an increase or a decrease.
1 3 6 7 9: Safe because the levels are all increasing by 1, 2, or 3.
So, in this example, 2 reports are safe.

Analyze the unusual data from the engineers. How many reports are safe?
*/

import fs from "fs";

const data = fs.readFileSync("input.txt", "utf-8");

const reports = data.trim().split("\n");

function isSafe(report) {
  const levels = report.split(" ").map(Number);
  let direction = 0; 

  for (let i = 1; i < levels.length; i++) {
    const diff = levels[i] - levels[i - 1];

    if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
      return false;
    }

    if (direction === 0) {
      direction = diff > 0 ? 1 : -1;
    } else {
      if ((diff > 0 && direction === -1) || (diff < 0 && direction === 1)) {
        return false;
      }
    }
  }

  return true;
}

const safeReportsCounter = reports.filter(isSafe);

console.log("Safe reports:", safeReportsCounter.length);