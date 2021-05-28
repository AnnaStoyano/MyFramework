import renderApp from '../framework/render';

// export function switchCharactersRadio(event) {
//   const switchTarget = event.target.previousElementSibling;
//   if (switchTarget && switchTarget.value != window.currentState.currentCharacters) {
//     window.currentState.currentCharacters = switchTarget.value;
//     renderApp();
//   }
// }

// export function searchByName(characterName) {
//   if (characterName != window.currentState.currentSearch) {
//     window.currentState.currentSearch = characterName.trim().toLowerCase();
//     renderApp();
//   }
// }

// export function filterCharactersByWork() {
//   if (window.currentState.currentCharacters == 'staff') {
//     return window.currentState.characters.filter(character => character.hogwartsStaff == true);
//   } else if (window.currentState.currentCharacters == 'students') {
//     return window.currentState.characters.filter(character => character.hogwartsStaff == false);
//   } else {
//     return window.currentState.characters;
//   }
// }

export function closeModal() {
  window.currentState.activeCard = null;
  renderApp();
}
