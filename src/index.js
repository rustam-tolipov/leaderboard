import './style.css';
import displayList from './displayList';
import sendResult from './sendResult';
import getResult from './getResult';
import addCandidate from './addCandidate';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
let link;
const submit = document.getElementById('submit');
const refresh = document.getElementById('refresh');
const list = [];

submit.addEventListener('click', async (e) => {
  e.preventDefault();
  const player = await addCandidate(url);
  const name = player.candidateName;
  const score = player.candidateScore;
  const gameLink = player.link;
  link = gameLink;
  await sendResult(name, score, gameLink);
});

refresh.addEventListener('click', async (e) => {
  e.preventDefault();
  const result = await getResult(link);
  const candidates = result.result;
  const obj = candidates.pop();
  list.push(obj);

  function sortCandidates(a, b) {
    if (a.score > b.score) {
      return -1;
    }
    if (a.score < b.score) {
      return 1;
    }
    return 0;
  }

  list.sort(sortCandidates);

  displayList(list);
});

window.onload = async () => {
  displayList();
};
