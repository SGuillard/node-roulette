const PlayRoulette = require("../Utils/PlayRoulette.mjs");
const getHistory = require("../Utils/GetHistory.js");

exports.play = () => {
  const history = getHistory();
  let play = new PlayRoulette(history);
  return play.play();
};
