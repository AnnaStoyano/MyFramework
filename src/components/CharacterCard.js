/** @jsx createElement */
/** @jsxFrag createFragment */
import style from '../style.css';

export default function CharacterCard({ name, image }) {
  return (
    <div class={('characterCard', style.displayCharactersCard)} aria-label={name}>
      <div class={style.top}>
        <img src={window.getSecurityURL(image)} />
      </div>
      <p>{name}</p>
    </div>
  );
}
