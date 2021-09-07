import './style.css';

const scoreBox = document.getElementById('scores-box');

const displayList = (list) => {
  list.forEach((each) => {
    const eachItem = document.createElement('li');
    eachItem.className = 'item';

    const name = document.createElement('p');
    name.className = 'name';
    name.textContent = `${each.name}`;
    eachItem.appendChild(name);

    const score = document.createElement('p');
    score.className = 'score';
    score.textContent = `: ${each.score}`;
    eachItem.appendChild(score);
    scoreBox.appendChild(eachItem);
  });
};

export default displayList;
