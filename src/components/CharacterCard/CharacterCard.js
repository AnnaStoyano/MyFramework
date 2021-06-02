/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework';
import style from './CharacterCard.css';
import { getSecurityURL } from '../../utils';

export default function CharacterCard({ name, image }) {
  return (
    <div class={style.displayCharactersCard} aria-label={name}>
      <div class={style.top}>
        <img src={getSecurityURL(image)} />
      </div>
      <p>{name}</p>
    </div>
  );
}
