async function allData() {
  const response = await fetch('data.json');
  const data = await response.json;
  return data;
}

allData()
  .then((data) => {
    console.log('resolved', data[0]);
  })
  .catch((err) => console.log('error with msg:', err.message));

export default allData;
