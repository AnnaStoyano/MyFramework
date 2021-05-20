/** @jsx createElement */
/** @jsxFrag createFragment */

import style from '../style.css';

export default function Search() {
  return (
    <div class={style.searchWrapper}>
      <label For="search">Enter name: </label>
      <input
        type="text"
        id="search"
        value={window.currentState.currentSearch}
        onchange={e => window.searchByName(e.target.value)}
      />
    </div>
  );
}
