/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import { searchByName } from '../../data/helper';
import style from './SearchByName.css';

export default function Search() {
  return (
    <div class={style.searchWrapper}>
      <label For="search">Enter name: </label>
      <input
        type="text"
        id="search"
        value={window.currentState.currentSearch}
        onchange={e => searchByName(e.target.value)}
      />
    </div>
  );
}
