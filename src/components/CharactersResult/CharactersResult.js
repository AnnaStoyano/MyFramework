/** @jsx createElement */
/** @jsxFrag createFragment */
import { performDisplayCharacters } from '../../data/charactersData';
import { createElement, createFragment } from '../../framework/element';
import displayPopUp from '../../data/displayPopUp';
import { filterCharactersByWork } from '../../data/helper';
import CharacterCard from '../CharacterCard';
import style from './CharactersResult.css';

export default function CharactersResult() {
  performDisplayCharacters();
  const { currentSearch, characters, error, isDataLoading } = window.currentState;
  let content = '';
  if (isDataLoading) {
    content = 'Data Loading...';
  }

  if (error != null) {
    content = window.currentState.error;
  }

  if (characters.length > 0) {
    window.currentState.currentDisplayCharacters = filterCharactersByWork().filter(item =>
      item.name.toLowerCase().startsWith(currentSearch),
    );

    const charactersListItems = window.currentState.currentDisplayCharacters.map(character => (
      <CharacterCard name={character.name} image={character.image} />
    ));

    content = (
      <div
        id="displayCharacters"
        class={style.displayCharacters}
        onclick={e => displayPopUp(e.target)}
      >
        <ul>{charactersListItems}</ul>
      </div>
    );
  }
  return <div>{content}</div>;
}
