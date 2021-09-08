const getResult = async (link) => {
  const fetchedData = await fetch(link);
  return fetchedData.json();
};

export default getResult;