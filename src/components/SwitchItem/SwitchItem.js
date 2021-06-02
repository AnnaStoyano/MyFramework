/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework';
import style from './SwitchItem.css';

export default function SwitchItem(value, id, currentCharacters) {
  return (
    <>
      <input
        type="radio"
        name="switchDisplay"
        value={value}
        id={id}
        checked={currentCharacters == value ? true : false}
        class={style.switchInput}
      />
      <label For={id} class={style.switchLabel}>
        {value}
      </label>
    </>
  );
}
