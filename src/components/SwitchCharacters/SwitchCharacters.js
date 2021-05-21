/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import { switchCharactersRadio } from '../../data/helper';
import style from './SwitchCharacters.css';
import SwitchItem from '../SwitchItem';

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
    <div id="switch-wrapper" class={style.switchWrapper} onclick={e => switchCharactersRadio(e)}>
      {' '}
      {switchesDOM}{' '}
    </div>
  );
}
