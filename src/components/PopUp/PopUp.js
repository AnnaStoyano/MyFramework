import React from 'react';
import style from './PopUp.css';
import { getSecurityURL } from '../../utils';

export default function PopUp({
  name,
  image,
  species,
  gender,
  house,
  dateOfBirth,
  ancestry,
  actor,
  alive,
  setActive,
}) {
  return (
    <div id="moreInfo" className={style.moreInfo}>
      <div aria-label={name} className={('top', style.top)}>
        <img src={getSecurityURL(image)} />
      </div>
      <p className={style.characterName}>{name}</p>
      <div className={style.characterInfo}>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
        <p>Date of Birth: {dateOfBirth ? dateOfBirth : '-'}</p>
        <p>House: {house}</p>
        <p>Ancestry: {ancestry}</p>
        <p>Alive: {alive ? '+' : '-'}</p>
        <p>Actor: {actor}</p>
      </div>
      <button onClick={() => setActive(null)}>x</button>
    </div>
  );
}
