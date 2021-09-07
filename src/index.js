import './style.css';
import displayList from './displayList';

const scores = [
  {
    name: 'Muhammad',
    score: 100,
  },
  {
    name: 'John',
    score: 98,
  },
  {
    name: 'Ali',
    score: 69,
  },
  {
    name: 'Sonia',
    score: 55,
  },
  {
    name: 'Alex',
    score: 54,
  },
];

const displayParticipant = (scores, show) => {
  show(scores);
};

window.onload = () => {
  displayParticipant(scores, displayList);
};
