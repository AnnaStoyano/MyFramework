/** @jsx createElement */
/** @jsxFrag createFragment */
import SwitchCharacters from './SwitchCharacters';
import SearchByName from './SearchByName';
import DisplayResult from './DisplayResult';

export default function App() {
  return (
    <>
      <SwitchCharacters />
      <SearchByName />
      <DisplayResult activeCard={window.currentState.activeCard} />
    </>
  );
}
