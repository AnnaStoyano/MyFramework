import React from 'react';
import style from './SortingByGender.css';
import { switchInputs } from '../../data/helper';
import SwitchItem from '../SwitchItem';

export default function SortingByGender({ onClick, currentGender }) {
  const genders = [
    {
      id: 'gender-all',
      value: 'all',
    },
    {
      id: 'gender-female',
      value: 'female',
    },
    {
      id: 'gender-male',
      value: 'male',
    },
  ];

  return (
    <div
      id="genders-wrapper"
      className={style.genderWrapper}
      onClick={e => onClick(switchInputs(e, 'all'))}
    >
      {genders.map(genderItem => (
        <SwitchItem
          value={genderItem.value}
          key={genderItem.id}
          id={genderItem.id}
          current={currentGender}
          name="gender"
        />
      ))}
    </div>
  );
}
