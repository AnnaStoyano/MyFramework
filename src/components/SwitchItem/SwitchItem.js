import React from 'react';
import style from './SwitchItem.css';

export default function SwitchItem({ value, id, currentCharacters }) {
  return (
    <>
      <input
        type="radio"
        name="switchDisplay"
        value={value}
        id={id}
        defaultChecked={currentCharacters == value ? true : false}
        className={style.switchInput}
      />
      <label htmlFor={id} className={style.switchLabel}>
        {value}
      </label>
    </>
  );
}
