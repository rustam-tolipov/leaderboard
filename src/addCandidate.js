import createGame from './createGame';

const name = document.getElementById('name');
const score = document.getElementById('score');

const addCandidate = async (url) => {
  const result = await createGame(url);
  let gameId = result.result;
  gameId = gameId.substring(14, 34);
  const link = `${url}${gameId}/scores/`;

  const errorMsg = document.querySelector('.error-msg');
  if (name.value === '' || score.value === '') {
    errorMsg.style.display = 'block';
  } else {
    const candidateName = name.value;
    const candidateScore = score.value;
    errorMsg.style.display = 'none';
    name.value = '';
    score.value = '';
    return { candidateName, candidateScore, link };
  }
  return 'Please insert your name and score';
};

export default addCandidate;
