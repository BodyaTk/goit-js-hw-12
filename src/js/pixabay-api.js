import axios from 'axios';

const API_KEY = '54618871-049329cee24e4d9e5a0e35534';
axios.defaults.baseURL = 'https://pixabay.com/api/';

function getImagesByQuery(query) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
      },
    })
    .then(res => res.data);
}

export { getImagesByQuery };
