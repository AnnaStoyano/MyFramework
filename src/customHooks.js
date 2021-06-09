import { validateAndLoadData } from './data/charactersData';
import { useEffect, useState } from 'react';

export const useCharacters = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (characters.length <= 0) {
      validateAndLoadData()
        .then(data => {
          const { message, code } = data;
          if (code !== '200' && message) throw Error(message);
          setError(null);
          setCharacters(data.data);
        })
        .catch(setError)
        .finally(() => setIsLoading(false));
    }
  }, []);

  return {
    isLoading,
    error,
    characters,
  };
};
