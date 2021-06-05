import React, { useState } from 'react';
import { useCharacters } from '../customHooks';
import SwitchCharacters from './SwitchCharacters';
import SearchByName from './SearchByName';
import CharactersResult from './CharactersResult';
import PopUp from './PopUp';

export default function App() {
  const { error, isLoading, characters } = useCharacters();
  const [activeCard, setActiveCard] = useState(null);
  const [currentSearch, setCurrentSearch] = useState('');
  const [currentCharacters, setCurrentCharacters] = useState('all');

  return (
    <>
      <SwitchCharacters onClick={setCurrentCharacters} currentCharacters={currentCharacters} />
      <SearchByName onChange={setCurrentSearch} currentSearch={currentSearch} />
      <CharactersResult
        currentSearch={currentSearch}
        isLoading={isLoading}
        error={error}
        setActiveCard={setActiveCard}
        characters={characters}
        currentCharacters={currentCharacters}
      />
      {activeCard ? <PopUp {...activeCard} setActive={setActiveCard} /> : null}
    </>
  );
}
