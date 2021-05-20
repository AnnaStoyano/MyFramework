export function validateAndLoadData() {
  const API_URL = 'https://hp-api.herokuapp.com/api/characters';
  if (window.currentState.characters.length <= 0) {
    return fetch(API_URL)
      .then(res => res.json())
      .then(data => ({
        data,
      }));
  }
  return Promise.resolve(window.currentState.characters);
}

export function performDisplayCharacters() {
  window.currentState.isDataLoading = true;
  window.currentState.error = null;
  window
    .validateAndLoadData()
    .then(({ err, data }) => {
      window.currentState.isDataLoading = false;

      if (err) {
        window.currentState.error = err;
      } else if (data) {
        window.currentState.characters = data;
        window.renderApp();
      }
    })
    .catch(() => {
      window.currentState.error = 'ERROR';
    });
}
