/** @jsx createElement */
/** @jsxFrag createFragment */

import style from '../style.css';
import { filterCharactersByWork } from '../data/helper';
import CharacterCard from './CharacterCard';

export default function CharactersResult() {
  const {
    currentSearch,
    currentDisplayCharacters,
    characters,
    error,
    isDataLoading,
  } = window.currentState;
  let content = '';
  if (isDataLoading) {
    content = 'Data Loading...';
  }

  if (error != null) {
    content = window.currentState.error;
  }

  if (characters.length > 0) {
    currentDisplayCharacters = filterCharactersByWork().filter(item =>
      item.name.toLowerCase().startsWith(currentSearch),
    );

    const charactersListItems = currentDisplayCharacters.map(character => (
      <CharacterCard name={character.name} image={character.image} />
    ));

    content = (
      <div
        id="displayCharacters"
        class={style.displayCharacters}
        onclick={e => window.displayPopUp(e.target)}
      >
        <ul>{charactersListItems}</ul>
      </div>
    );
  }

  return content;
}
