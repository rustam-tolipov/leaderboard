const saveToAPI = async (nameInput, scoreInput) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9I998jQkwVXa66yLA2rE/scores', {
    method: 'POST',
    body: JSON.stringify({
      user: nameInput,
      score: scoreInput,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  if (!response) {
    throw new Error(`404! error: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

export default saveToAPI;
