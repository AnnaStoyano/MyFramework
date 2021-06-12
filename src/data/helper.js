export function filterCharactersByWork(characters, currentWork) {
  if (currentWork == 'staff') {
    return characters.filter(character => character.hogwartsStaff == true);
  } else if (currentWork == 'students') {
    return characters.filter(character => character.hogwartsStaff == false);
  } else {
    return characters;
  }
}

export function switchInputs(event, defaultValue) {
  const switchTarget = event.target.closest('input');
  if (switchTarget && switchTarget.value) {
    return switchTarget.value;
  }
  return defaultValue;
}

export function compareByAge(character1Age, character2Age, currentAge) {
  if (currentAge === 'Youngest first') {
    return character2Age.getTime() - character1Age.getTime();
  }

  return character1Age - character2Age;
}

export function getDatefromValue(value) {
  if (typeof value == 'string') {
    const [day, month, year] = value.split('-');
    return new Date(year, month, day);
  } else if (typeof value == 'number') {
    return new Date(value);
  }
}

export function getCharacterAge(str) {
  const ageDate = new Date(Date.now() - getDatefromValue(str));
  return ageDate.getFullYear() - 1969;
}
