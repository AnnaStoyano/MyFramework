export function validateAndLoadData() {
  const API_URL = 'https://hp-api.herokuapp.com/api/characters';
  return fetch(API_URL)
    .then(res => res.json())
    .then(data => ({
      data,
    }));
}
