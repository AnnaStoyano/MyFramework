/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import style from './SwitchItem.css';

export default function SwitchItem(value, id) {
  return (
    <>
      <input
        type="radio"
        name="switchDisplay"
        value={value}
        id={id}
        checked={window.currentState.currentCharacters == value ? true : false}
        class={style.switchInput}
      />
      <label For={id} class={style.switchLabel}>
        {value}
      </label>
    </>
  );
}
