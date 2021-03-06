import React from 'react';
import style from './CharacterCard.css';
import { getSecurityURL } from '../../utils';

export default function CharacterCard({ name, age, image }) {
  return (
    <div className={style.displayCharactersCard} aria-label={name}>
      <div className={style.top}>
        <img src={getSecurityURL(image)} />
      </div>
      <p>{name}</p>
      <p>{age || 'n/a'} years old</p>
    </div>
  );
}
