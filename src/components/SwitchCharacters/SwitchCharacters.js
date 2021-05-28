/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import { switchCharactersRadio } from '../../data/helper';
import style from './SwitchCharacters.css';
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

  function switchCharacters(event) {
    const switchTarget = event.target.previousElementSibling;
    if (switchTarget && switchTarget.value != currentCharacters) {
      return switchTarget.value;
    }

    return currentCharacters;
  }

  const switchesDOM = switches.map(switchItem => SwitchItem(switchItem.value, switchItem.id));

  return (
    <div
      id="switch-wrapper"
      class={style.switchWrapper}
      onclick={e => onClick(switchCharacters(e))}
    >
      {' '}
      {switchesDOM}{' '}
    </div>
  );
}
