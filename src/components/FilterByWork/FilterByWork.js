import React from 'react';
import style from './FilterByWork.css';
import { switchInputs } from '../../data/helper';
import SwitchItem from '../SwitchItem';

export default function FilterByWork({ onClick, currentWork }) {
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
      onClick={e => onClick(switchInputs(e, 'all'))}
    >
      {switches.map(switchItem => (
        <SwitchItem
          value={switchItem.value}
          key={switchItem.id}
          id={switchItem.id}
          current={currentWork}
          name="work"
        />
      ))}
    </div>
  );
}
