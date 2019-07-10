const { NB_LAUNCH } = require("./Constants");

module.exports = function getHistory() {
  let history = [];
  for (let i = 0; i < NB_LAUNCH; i++) {
    history.push(Math.floor(Math.random() * 37));
  }
  return history;
};
