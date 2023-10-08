#!/usr/bin/env node

const fs = require("fs");

const args = process.argv.slice(2);

const fileData = {
  name: undefined,
  byteCount: undefined,
  lineCount: undefined,
  wordCount: undefined,
  characterCount: undefined,
};

const filePath = args.find((arg) => arg[0] !== "-") ?? 0;

const fileContentBuffer = fs.readFileSync(filePath);
const fileContentString = fileContentBuffer.toString();

fileData.name = filePath === 0 ? "" : filePath;
fileData.byteCount = Buffer.byteLength(fileContentBuffer);
fileData.lineCount = fileContentString.split("\n").length - 1;
fileData.wordCount = fileContentString.trim().split(/\s+/).length;
fileData.characterCount = fileContentString.length;

const cFlag = args.indexOf("-c");
if (cFlag > -1) {
  console.log(" ", fileData.byteCount, fileData.name);
  process.exit();
}

const lFlag = args.indexOf("-l");
if (lFlag > -1) {
  console.log(" ", fileData.lineCount, fileData.name);
  process.exit();
}

const wFlag = args.indexOf("-w");
if (wFlag > -1) {
  console.log(" ", fileData.wordCount, fileData.name);
  process.exit();
}

const mFlag = args.indexOf("-m");
if (mFlag > -1) {
  console.log(" ", fileData.characterCount, fileData.name);
  process.exit();
}

console.log(
  " ",
  fileData.lineCount,
  fileData.wordCount,
  fileData.byteCount,
  fileData.name
);
