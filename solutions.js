// SOLUTIONS TO MAP ANALYZER LEVELS

// Global Variables
let row, column; // Row & Column of Mouse on the Map
let outputEl = document.getElementById("currentTile");

// Solution Functions...
function level1Solution() {
  // USE BINARY IF STATEMENT
  if (column >= 4) {
    outputEl.innerHTML = "Water";
  } else {
    outputEl.innerHTML = "Sand";
  }
}

function level2Solution() {
  // USE CHAINED IF STATEMENT
  if (column <= 2) {
    outputEl.innerHTML = "Hills";
  } else if (column <= 7) {
    outputEl.innerHTML = "Sand";
  } else {
    outputEl.innerHTML = "Water";
  }
}

function level3Solution() {
  // USE BINARY IF STATEMENT
  outputEl.innerHTML = "----";
}

function level4Solution() {
  // USE BINARY IF STATEMENT
  outputEl.innerHTML = "----";
}

function level5Solution() {
  // USE CHAINED IF STATEMENT
  if (row <= 2) {
    outputEl.innerHTML = "Hills";
  } else if (row <=5) {
    outputEl.innerHTML = "Sand";
  } else {
  outputEl.innerHTML = "Water";
  }
}

function level6Solution() {
  // USE BINARY IF STATEMENT
  outputEl.innerHTML = "----";
}

function level7Solution() {
  // USE BINARY IF STATEMENT
  if (column === 7 && row === 4) {
    outputEl.innerHTML = "Water";
  } else {
    outputEl.innerHTML = "Sand"
  }
  
}

function level8Solution() {
  // USE BINARY IF STATEMENT
if (column === 2 || row === 5) {
  outputEl.innerHTML = "Tree";
  } else {
    outputEl.innerHTML = "Sand";
  }
}

function level9Solution() {
  // USE BINARY IF STATEMENT
  outputEl.innerHTML = "----";
}

function level10Solution() {
  // USE CHAINED IF STATEMENT
  outputEl.innerHTML = "----";
}

function level11Solution() {
  // USE CHAINED IF STATEMENT
  if (column <= 5 && row <= 3) {
  outputEl.innerHTML = "Water";
  } else if (row )
}

function level12Solution() {
  // USE BINARY IF STATEMENT
  if (column >= 5 && row >= 4 || column <= 6 && row <= 5) {
  outputEl.innerHTML = "Water";
  } else {
    outputEl.innerHTML = "Sand"
  }
}

function level13Solution() {
  // USE BINARY IF STATEMENT
  outputEl.innerHTML = "----";
}

function level14Solution() {
  // USE CHAINED IF STATEMENT
  outputEl.innerHTML = "----";
}
