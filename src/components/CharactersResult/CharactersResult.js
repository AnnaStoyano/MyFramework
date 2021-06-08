import React, { useState, useEffect } from 'react';
import getPopUp from '../../data/getPopUp';
import CharacterCard from '../CharacterCard';
import style from './CharactersResult.css';

export default function CharactersResult({ isLoading, error, currentCards, setActiveCard }) {
  if (isLoading) {
    return <p> Data Loading... </p>;
  }

  if (error) {
    return <p> {typeof error === 'object' ? error.toString() : error} </p>;
  }

  const charactersListItems = currentCards.map(character => (
    <CharacterCard key={character.name} name={character.name} image={character.image} />
  ));

  return (
    <div
      id="displayCharacters"
      className={style.displayCharacters}
      onClick={e => setActiveCard(getPopUp(e.target, currentCards))}
    >
      <div>
        {charactersListItems.length > 0 ? charactersListItems : 'Don`t have the character '}
      </div>
    </div>
  );
}
