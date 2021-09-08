const scoreBox = document.getElementById('scores-box');

const displayList = (list) => {
  scoreBox.innerHTML = '';
  list.forEach((each) => {
    const eachCandidate = document.createElement('li');
    eachCandidate.className = 'candidate';

    const name = document.createElement('p');
    name.className = 'name';
    name.textContent = each.user;
    eachCandidate.appendChild(name);

    const score = document.createElement('p');
    score.className = 'score';
    score.textContent = each.score;
    eachCandidate.appendChild(score);

    scoreBox.appendChild(eachCandidate);
  });
};

export default displayList;
