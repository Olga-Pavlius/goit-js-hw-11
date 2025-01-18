const API_KEY = '48293638-4d2a22c69cd32ab6d85c7a697';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1, perPage = 40) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: perPage,
  });

  const response = await fetch(`${BASE_URL}?${params}`);
  if (!response.ok) {
    throw new Error('Failed to fetch images');
  }
  return response.json();
}
