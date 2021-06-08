import React, { useState, useEffect } from 'react';
import style from './AllFilters.css';
import SwitchWork from '../SwitchWork';
import SearchByName from '../SearchByName';
import { filterCharactersByWork } from '../../data/helper';

export default function AllFilters({ setCards, characters }) {
  const [currentWork, setCurrentWork] = useState('all');
  const [currentSearch, setCurrentSearch] = useState('');

  useEffect(() => {
    setCards(characters);
  }, [characters]);

  useEffect(() => {
    setCards(
      filterCharactersByWork(characters, currentWork).filter(item =>
        item.name.toLowerCase().startsWith(currentSearch),
      ),
    );
  }, [currentSearch, currentWork]);

  return (
    <div className={style.filtersWrapper}>
      <SwitchWork onClick={setCurrentWork} currentWork={currentWork} />
      <SearchByName onChange={setCurrentSearch} currentSearch={currentSearch} />
    </div>
  );
}
