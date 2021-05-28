/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment, useState } from '../framework';
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
      <SearchByName onSearch={setCurrentSearch} currentSearch={currentSearch} />
      <CharactersResult
        currentSearch={currentSearch}
        isLoading={isLoading}
        error={error}
        setActiveCard={setActiveCard}
        characters={characters}
        currentCharacters={currentCharacters}
      />
      {activeCard ? <PopUp {...activeCard} /> : null}
    </>
  );
}
