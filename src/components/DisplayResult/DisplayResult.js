/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';

import CharactersResult from '../CharactersResult';
import PopUp from '../PopUp';

export default function DisplayResult({ activeCard = null }) {
  return (
    <>
      <CharactersResult />
      {activeCard ? <PopUp {...activeCard} /> : null}
    </>
  );
}
