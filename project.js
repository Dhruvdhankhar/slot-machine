// 1. Despot some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play again

const prompt = require("prompt-sync")();
// This line imports the prompt-sync module, which allows the program to take input from the user in the terminal.
const ROWS = 3;
const COLS = 3;
// These constants define the number of rows and columns in the slot machine.


const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};
// This object defines how many of each symbol (A, B, C, D) are available in the slot machine. there can be only 2 A's in a reel out of 3


const SYMBOL_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};
//This object defines the value of each symbol. For example, symbol A is worth 5 units.