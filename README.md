# Red-Nosed Reports

A JavaScript project to solve Day 2: Red-Nosed Reports (Advent of Code 2024).

## Objective

Analyze a list of reports (one per line), where each report contains numeric levels separated by spaces, and count how many are safe.

A report is safe when:

- All levels are in either increasing or decreasing order
- The difference between adjacent levels is between 1 and 3

## Project structure

- input.txt: report input file
- response.js: JavaScript solution

## How to run

Prerequisite:

- Node.js installed

Command:

```bash
node response.js
```

Expected output for the current input:

```text
Safe reports: 524
```
