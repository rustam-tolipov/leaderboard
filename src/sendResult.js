const sendResult = async (name, score, url) => {
  const data = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: name,
      score,
    }),
  });
  return data.json();
};

export default sendResult;