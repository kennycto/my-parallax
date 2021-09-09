const apiUrl = 'https://pixabay.com/api';

export const getImages = async () => {
  const url = new URL(`${apiUrl}/?key=${process.env.REACT_APP_PIXABAY_APIKEY}`);
  const options = {};
  const request = new Request(url, options);

  try {
    const response = await fetch(request);
    if (!response.ok) throw new Error('Get images failed');
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};
