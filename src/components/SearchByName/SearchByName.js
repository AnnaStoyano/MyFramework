import React from 'react';
import style from './SearchByName.css';

export default function Search({ currentSearch, onChange }) {
  return (
    <div className={style.searchWrapper}>
      <label htmlFor="search">Enter name: </label>
      <input
        type="text"
        id="search"
        defaultValue={currentSearch}
        onChange={e => onChange(e.target.value.trim().toLowerCase())}
      />
    </div>
  );
}
