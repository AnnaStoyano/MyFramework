import React, { useState, useEffect } from 'react';
import getPopUp from '../../data/getPopUp';
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

  useEffect(() => {
    setCurrentDisplayCharacters(characters);
  }, [characters]);

  useEffect(() => {
    setCurrentDisplayCharacters(
      filterCharactersByWork(characters, currentCharacters).filter(item =>
        item.name.toLowerCase().startsWith(currentSearch),
      ),
    );
  }, [currentSearch, currentCharacters]);

  if (isLoading) {
    return <p> Data Loading... </p>;
  }

  if (error) {
    return <p> {typeof error === 'object' ? error.toString() : error} </p>;
  }

  // if (characters.length <= 0) {
  //   return <p> Don `t have characters to display</p>;
  // }

  // useEffect(() => {
  //     setCurrentDisplayCharacters(
  //       filterCharactersByWork(characters, currentCharacters).filter(item =>
  //         item.name.toLowerCase().startsWith(currentSearch),
  //       ),
  //     );
  // }, [currentSearch, currentCharacters]);

  const charactersListItems = currentDisplayCharacters.map(character => (
    <CharacterCard key={character.name} name={character.name} image={character.image} />
  ));

  return (
    <div
      id="displayCharacters"
      className={style.displayCharacters}
      onClick={e => setActiveCard(getPopUp(e.target, currentDisplayCharacters))}
    >
      <div>
        {charactersListItems.length > 0 ? charactersListItems : 'Don`t have the character '}
      </div>
    </div>
  );
}
