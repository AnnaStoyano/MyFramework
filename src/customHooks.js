import { validateAndLoadData } from './data/charactersData';
import { useEffect, useState } from './framework';

export const useCharacters = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    validateAndLoadData()
      .then(data => {
        const { message, code } = data;
        if (code !== '200' && message) throw Error(message);
        setError(null);
        setCharacters(data);
      })
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [characters]);

  return {
    isLoading,
    error,
    characters,
  };
};

// export function performDisplayCharacters() {
//     window.currentState.isDataLoading = true;
//     window.currentState.error = null;
//     validateAndLoadData()
//       .then(({ err, data }) => {
//         window.currentState.isDataLoading = false;

//         if (err) {
//           window.currentState.error = err;
//         } else if (data) {
//           window.currentState.characters = data;
//           renderApp();
//         }
//       })
//       .catch(() => {
//         window.currentState.error = 'ERROR';
//       });
//   }
