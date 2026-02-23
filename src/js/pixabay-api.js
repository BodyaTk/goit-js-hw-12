import axios from 'axios';
const API_KEY = '54668130-3dbf133d1de2adf3be7a098c3';
const BASE_URL = 'https://pixabay.com/api/';

export default async function getImagesByQuery(query, page = 1) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: page,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    console.error('Info about error', error);
    throw error;
  }
}
