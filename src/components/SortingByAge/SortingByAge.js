import React from 'react';
import style from './SortingByAge.css';
import { switchInputs } from '../../data/helper';
import SwitchItem from '../SwitchItem';

export default function SortingByAge({ onClick, currentAge }) {
  const age = [
    {
      id: 'age-top',
      value: 'ascending',
    },
    {
      id: 'age-bottom',
      value: 'descending',
    },
  ];

  return (
    <div
      id="age-wrapper"
      className={style.ageWrapper}
      onClick={e => onClick(switchInputs(e, 'top'))}
    >
      {age.map(ageItem => (
        <SwitchItem
          value={ageItem.value}
          key={ageItem.id}
          id={ageItem.id}
          current={currentAge}
          name="age"
          icon={ageItem.icon}
        />
      ))}
    </div>
  );
}
