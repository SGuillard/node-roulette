const nbIteriation = 100;

module.exports = function getHistory() {
  let history = [];
  for (let i = 0; i < nbIteriation; i++) {
    history.push(Math.floor(Math.random() * 37));
  }
  return history;
};
