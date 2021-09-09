const addCandidates = (data) => {
  data.result.forEach((player) => {
    const scores = document.querySelector('.scores-box');
    const li = document.createElement('li');
    li.className = 'candidate';
    const name = document.createElement('p');
    const score = document.createElement('p');
    li.appendChild(name);
    li.appendChild(score);
    scores.appendChild(li);
    name.innerText = player.user;
    score.innerText = player.score;
  });
};

export default addCandidates;
