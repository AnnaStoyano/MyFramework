/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import { useState } from '../../framework/hooks';

import CharactersResult from '../CharactersResult';
import PopUp from '../PopUp';

export default function DisplayResult({ isLoading, error, characters, currentSearch }) {
  const [activeCard, setActiveCard] = useState(null);
  return (
    <>
      <CharactersResult
        isLoading={isLoading}
        error={error}
        setActiveCard={setActiveCard}
        characters={characters}
      />
      {activeCard ? <PopUp {...activeCard} /> : null}
    </>
  );
}
