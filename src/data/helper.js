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
    return character2Age - character1Age;
  }
  return character1Age - character2Age;
}

export function getDatefromString(str) {
  const [day, month, year] = str.split('-');
  return new Date(year, month, day);
}

export function getCharacterAge(str) {
  const ageDate = new Date(Date.now() - getDatefromString(str));
  return ageDate.getFullYear() - 1969;
}
