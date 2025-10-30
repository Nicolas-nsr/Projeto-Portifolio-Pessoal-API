// Progressão por pontuação
let scores = [];

exports.addScore = (username, points) => {
  const userScore = scores.find(s => s.username === username);
  if (userScore) {
    userScore.points += points;
  } else {
    scores.push({ username, points });
  }
};

exports.getScore = (username) => {
  const userScore = scores.find(s => s.username === username);
  return userScore ? userScore.points : 0;
};
