import React, { useState, useEffect } from 'react';
import style from './AllFilters.css';
import FilterByWork from '../FilterByWork';
import { getDatefromString } from '../../data/helper';
import SearchByName from '../SearchByName';
import SortingByGender from '../SortingByGender';
import SortingByAge from '../SortingByAge';
import { filterCharactersByWork, compareByAge } from '../../data/helper';

export default function AllFilters({ setCards, characters }) {
  const [currentWork, setCurrentWork] = useState('all');
  const [currentSearch, setCurrentSearch] = useState('');
  const [currentGender, setCurrentGender] = useState('all');
  const [currentAge, setCurrentAge] = useState('');

  useEffect(() => {
    setCards(characters);
  }, [characters]);

  useEffect(() => {
    setCards(
      filterCharactersByWork(characters, currentWork)
        .filter(item => item.name.toLowerCase().startsWith(currentSearch))
        .sort((character1, character2) =>
          compareByAge(
            getDatefromString(character1.dateOfBirth),
            getDatefromString(character2.dateOfBirth),
            currentAge,
          ),
        )
        .filter(item => {
          if (currentGender === 'all') {
            return item;
          }
          return item.gender === currentGender;
        }),
    );
  }, [currentSearch, currentWork, currentGender, currentAge]);

  return (
    <div className={style.filtersWrapper}>
      <FilterByWork onClick={setCurrentWork} currentWork={currentWork} />
      <SearchByName onChange={setCurrentSearch} currentSearch={currentSearch} />
      <label className={style.showMoreSorting} htmlFor={style.showMore}>
        Show More Sorting
      </label>
      <input type="checkbox" id={style.showMore} />
      <div className={style.sortingWrapper}>
        <SortingByGender onClick={setCurrentGender} currentGender={currentGender} />
        <SortingByAge onClick={setCurrentAge} currentAge={currentAge} />
      </div>
    </div>
  );
}
