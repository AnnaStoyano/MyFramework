/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import { searchByName } from '../../data/helper';
import style from './SearchByName.css';

export default function Search({ currentSearch, onSearch }) {
  return (
    <div class={style.searchWrapper}>
      <label For="search">Enter name: </label>
      <input
        type="text"
        id="search"
        value={currentSearch}
        onchange={e => onSearch(e.target.value.trim().toLowerCase())}
      />
    </div>
  );
}
