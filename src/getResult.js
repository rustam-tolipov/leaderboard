import addCandidates from './displayList';

const getFromAPI = () => {
  const getFetch = async () => {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9I998jQkwVXa66yLA2rE/scores');
    if (!response) {
      throw new Error(`404! error: ${response.status}`);
    }
    const data = await response.json();
    function sortCandidates(a, b) {
      if (a.score > b.score) {
        return -1;
      }
      if (a.score < b.score) {
        return 1;
      }
      return 0;
    }

    data.result.sort(sortCandidates);
    return data;
  };
  getFetch().then((data) => {
    addCandidates(data);
  });
};

export default getFromAPI;
