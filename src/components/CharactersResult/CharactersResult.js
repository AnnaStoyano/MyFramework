/** @jsx createElement */
/** @jsxFrag createFragment */
import { performDisplayCharacters } from '../../data/charactersData';
import { createElement, createFragment, useState } from '../../framework';
import displayPopUp from '../../data/displayPopUp';
import { filterCharactersByWork } from '../../data/helper';
import CharacterCard from '../CharacterCard';
import style from './CharactersResult.css';

export default function CharactersResult({
  isLoading,
  error,
  characters,
  setActiveCard,
  currentSearch,
  currentCharacters,
}) {
  const [currentDisplayCharacters, setCurrentDisplayCharacters] = useState([]);

  function filterCharactersByWork() {
    if (currentCharacters == 'staff') {
      return characters.filter(character => character.hogwartsStaff == true);
    } else if (currentCharacters == 'students') {
      return characters.filter(character => character.hogwartsStaff == false);
    } else {
      return characters;
    }
  }

  function displayPopUp(target) {
    const targetCard = target.closest('div[aria-label]');
    if (targetCard) {
      return currentDisplayCharacters.find(
        item => item.name == targetCard.getAttribute('aria-label'),
      );
    }
    return null;
  }

  if (isLoading) {
    return <p>Data Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (characters.length < 0) {
    return <p>Don`t have characters to display</p>;
  }

  setCurrentDisplayCharacters(
    filterCharactersByWork().filter(item => item.name.toLowerCase().startsWith(currentSearch)),
  );

  const charactersListItems = currentDisplayCharacters.map(character => (
    <CharacterCard name={character.name} image={character.image} />
  ));

  return (
    <div
      id="displayCharacters"
      class={style.displayCharacters}
      onclick={e => setActiveCard(displayPopUp(e.target))}
    >
      <ul>{charactersListItems}</ul>
    </div>
  );
}
