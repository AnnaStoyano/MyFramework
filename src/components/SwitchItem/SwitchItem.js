import React from 'react';
import style from './SwitchItem.css';

export default function SwitchItem({ value, id, current, name }) {
  return (
    <>
      <input
        type="radio"
        name={name}
        value={value}
        id={id}
        defaultChecked={current == value ? true : false}
        className={style.switchInput}
      />
      <label htmlFor={id} className={style.switchLabel}>
        {value}
      </label>
    </>
  );
}
