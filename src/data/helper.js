export function filterCharactersByWork(characters, currentCharacters) {
  if (currentCharacters == 'staff') {
    return characters.filter(character => character.hogwartsStaff == true);
  } else if (currentCharacters == 'students') {
    return characters.filter(character => character.hogwartsStaff == false);
  } else {
    return characters;
  }
}

export function switchCharacters(event, currentCharacters) {
  const switchTarget = event.target.closest('input');
  if (switchTarget && switchTarget.value != currentCharacters) {
    return switchTarget.value;
  }
  return currentCharacters;
}
