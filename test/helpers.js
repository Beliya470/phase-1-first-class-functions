const chai = require("chai");
global.expect = chai.expect;
const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const path = require("path");
const babel = require("@babel/core");

const html = fs.readFileSync(
  path.resolve(__dirname, "..", "index.html"),
  "utf-8"
);

const babelResult = babel.transformFileSync(
  path.resolve(__dirname, "..", "index.js"),
  {
    presets: ["@babel/preset-env"],
  }
);

const src = babelResult.code;

const dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" });
const { window } = dom;

// Remove the module.exports statement
// module.exports = {
//   window: window
// };

// Instead, assign the window object to a global variable
global.window = window;
