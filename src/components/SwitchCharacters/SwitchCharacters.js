import React from 'react';
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

  // const switchesDOM = switches.map(switchItem =>
  //   SwitchItem(switchItem.value, switchItem.id, currentCharacters),
  // );

  return (
    <div
      id="switch-wrapper"
      className={style.switchWrapper}
      onClick={e => onClick(switchCharacters(e, currentCharacters))}
    >
      {switches.map(switchItem => (
        <SwitchItem
          value={switchItem.value}
          key={switchItem.id}
          id={switchItem.id}
          currentCharacters={currentCharacters}
        />
      ))}
    </div>
  );
}
