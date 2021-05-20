/** @jsx createElement */
/** @jsxFrag createFragment */

import style from '../style.css';

export default function SwitchItem(value, id) {
  return (
    <>
      <input
        type="radio"
        name="switchDisplay"
        value={value}
        id={id}
        {...(window.currentState.currentCharacters == value ? 'checked' : '')}
        class={style.switchInput}
      />
      <label For={id} class="${style.switchLabel}">
        {value}
      </label>
      ;
    </>
  );
}
