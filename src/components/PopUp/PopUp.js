/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import { closeModal } from '../../data/helper';
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
}) {
  return (
    <div id="moreInfo" class={style.moreInfo}>
      <div aria-label={name} class={('top', style.top)}>
        <img src={getSecurityURL(image)} />
      </div>
      <p class={style.characterName}>{name}</p>
      <div class={style.characterInfo}>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
        <p>Date of Birth: {dateOfBirth}</p>
        <p>House: {house}</p>
        <p>Ancestry: {ancestry}</p>
        <p>Alive: {alive ? '+' : '-'}</p>
        <p>Actor: {actor}</p>
      </div>
      <button onclick={() => closeModal()}>x</button>
    </div>
  );
}