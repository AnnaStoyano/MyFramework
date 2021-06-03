/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment, useState } from '../framework';
import { useCharacters } from '../customHooks';
import SwitchCharacters from './SwitchCharacters';
import SearchByName from './SearchByName';
import CharactersResult from './CharactersResult';
import PopUp from './PopUp';
import { AppContext } from '../context';

export default function App() {
  const { error, isLoading, characters } = useCharacters();
  const [activeCard, setActiveCard] = useState(null);
  const [currentSearch, setCurrentSearch] = useState('');
  const [currentCharacters, setCurrentCharacters] = useState('all');

  return (
    <>
      <SwitchCharacters onClick={setCurrentCharacters} currentCharacters={currentCharacters} />
      <SearchByName onSearch={setCurrentSearch} currentSearch={currentSearch} />

      <AppContext.Provider value={characters}>
        <CharactersResult
          isLoading={isLoading}
          error={error}
          setActiveCard={setActiveCard}
          currentCharacters={currentCharacters}
          currentSearch={currentSearch}
        />
      </AppContext.Provider>
      {activeCard ? <PopUp {...activeCard} setActive={setActiveCard} /> : null}
    </>
  );
}
