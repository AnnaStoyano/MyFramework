export function filterCharactersByWork(characters, currentWork) {
  if (currentWork == 'staff') {
    return characters.filter(character => character.hogwartsStaff == true);
  } else if (currentWork == 'students') {
    return characters.filter(character => character.hogwartsStaff == false);
  } else {
    return characters;
  }
}

export function switchCharacters(event) {
  const switchTarget = event.target.closest('input');
  if (switchTarget && switchTarget.value) {
    return switchTarget.value;
  }
  return 'all';
}
