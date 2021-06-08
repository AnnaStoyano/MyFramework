import React, { useEffect, useState } from 'react';
import { useCharacters } from '../customHooks';
import CharactersResult from './CharactersResult';
import AllFilters from './AllFilters';
import PopUp from './PopUp';

export default function App() {
  const { error, isLoading, characters } = useCharacters();
  const [activeCard, setActiveCard] = useState(null);
  const [currentDisplayCards, setCurrentDisplayCards] = useState([]);

  useEffect(() => {
    setCurrentDisplayCards(characters);
  }, [characters]);

  return (
    <>
      <AllFilters setCards={setCurrentDisplayCards} characters={characters} />
      <CharactersResult
        isLoading={isLoading}
        error={error}
        setActiveCard={setActiveCard}
        currentCards={currentDisplayCards}
      />
      {activeCard ? <PopUp {...activeCard} setActive={setActiveCard} /> : null}
    </>
  );
}
