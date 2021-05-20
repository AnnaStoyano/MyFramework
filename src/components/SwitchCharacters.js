/** @jsx createElement */
/** @jsxFrag createFragment */

import style from '../style.css';
import SwitchItem from './SwitchItem';

export default function SwitchCharacters() {
  const switches = [
    {
      id: 'switch-all',
      value: 'all',
    },
    {
      id: 'switch-students',
      value: 'students',
    },
    {
      id: 'switch-staff',
      value: 'staff',
    },
  ];

  const switchesDOM = switches.map(switchItem => SwitchItem(switchItem.value, switchItem.id));

  return (
    <div
      id="switch-wrapper"
      class={style.switchWrapper}
      onclick={e => window.switchCharactersRadio(e)}
    >
      {' '}
      {switchesDOM}{' '}
    </div>
  );
}
