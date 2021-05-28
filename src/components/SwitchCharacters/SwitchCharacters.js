/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework';
import style from './SwitchCharacters.css';
import { switchCharacters } from '../../data/helper';
import SwitchItem from '../SwitchItem';

export default function SwitchCharacters({ onClick, currentCharacters }) {
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

  const switchesDOM = switches.map(switchItem =>
    SwitchItem(switchItem.value, switchItem.id, currentCharacters),
  );

  return (
    <div
      id="switch-wrapper"
      class={style.switchWrapper}
      onclick={e => onClick(switchCharacters(e, currentCharacters))}
    >
      {' '}
      {switchesDOM}{' '}
    </div>
  );
}
