import renderApp from '../framework/render';

export function validateAndLoadData() {
  const API_URL = 'https://hp-api.herokuapp.com/api/characters';
  return fetch(API_URL)
    .then(res => res.json())
    .then(data => ({
      data,
    }));
}

// export function performDisplayCharacters() {
//   window.currentState.isDataLoading = true;
//   window.currentState.error = null;
//   validateAndLoadData()
//     .then(({ err, data }) => {
//       window.currentState.isDataLoading = false;

//       if (err) {
//         window.currentState.error = err;
//       } else if (data) {
//         window.currentState.characters = data;
//         renderApp();
//       }
//     })
//     .catch(() => {
//       window.currentState.error = 'ERROR';
//     });
// }
