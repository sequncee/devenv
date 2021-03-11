const axios = require("axios");
const wrap = require("word-wrap");
// const themes = require("../../themes");


function kFormatter(num) {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);
}

function isValidHexColor(hexColor) {
  return new RegExp(
    /^([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{4})$/,
  ).test(hexColor);
}

function parseBoolean(value) {
  if (value === "true") {
    return true;
  } else if (value === "false") {
    return false;
  } else {
    return value;
  }
}

function parseArray(str) {
  if (!str) return [];
  return str.split(",");
}

function clampValue(number, min, max) {
  return Math.max(min, Math.min(number, max));
}

function isValidGradient(colors) {
  return isValidHexColor(colors[1]) && isValidHexColor(colors[2]);
}

 
function request(data, headers) {
  return axios({
    url: "https://api.github.com/graphql",
    method: "post",
    headers,
    data,
  });
}




// return console instance based on the environment
const logger =
  process.env.NODE_ENV !== "test" ? console : { log: noop, error: noop };

const CONSTANTS = {
  THIRTY_MINUTES: 1800,
  TWO_HOURS: 7200,
  FOUR_HOURS: 14400,
  ONE_DAY: 86400,
};

const SECONDARY_ERROR_MESSAGES = {
  MAX_RETRY:
    "Please add an env variable called PAT_1 with your github token in vercel",
  USER_NOT_FOUND: "Make sure the provided username is not an organization",
};


module.exports = {
  kFormatter,
  isValidHexColor,
  request,
  parseArray,
  parseBoolean,
  clampValue,
};
// enum CardSuit {
//   Clubs,
//   Diamonds,
//   Hearts,
//   Spades
// }
