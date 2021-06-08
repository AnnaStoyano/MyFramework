import React, { useState, useEffect } from 'react';
import style from './SwitchWork.css';
import { switchCharacters } from '../../data/helper';
import SwitchItem from '../SwitchItem';

export default function SwitchWork({ onClick, currentWork }) {
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

  return (
    <div
      id="switch-wrapper"
      className={style.switchWrapper}
      onClick={e => onClick(switchCharacters(e))}
    >
      {switches.map(switchItem => (
        <SwitchItem
          value={switchItem.value}
          key={switchItem.id}
          id={switchItem.id}
          currentCharacters={currentWork}
        />
      ))}
    </div>
  );
}
