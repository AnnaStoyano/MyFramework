import { characters } from './exportData';
import style from './style.css';

if (module.hot) {
  module.hot.accept();
}

window.currentState = {
  currentCharacters: 'all',
  currentSearch: '',
  currentDisplayCharacters: characters,
};

window.renderApp = renderApp;
window.getSecurityURL = getSecurityURL;

function App() {
  return `<div>
    ${SwitchCharacters()}
    <br>
    ${Search()}
    <br>
    ${DisplayInfo()}
    ${DisplayCharacters()}
    </div>`;
}

function renderApp() {
  const appRoot = document.querySelector('#app-root');
  appRoot.innerHTML = App();
  AddEventCharacter();
}

renderApp();

function SwitchCharacters() {
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

  const switchHTML = switches
    .map(
      switchItem => `<input type='radio' name='switchDisplay' value='${switchItem.value}' id='${
        switchItem.id
      }'
                                                    ${
                                                      window.currentState.currentCharacters ==
                                                      switchItem.value
                                                        ? 'checked'
                                                        : ''
                                                    } class='${style.switchInput}'>
                                                    <label for='${switchItem.id}' class='${
        style.switchLabel
      }'>${switchItem.value}</label>`,
    )
    .join('');
  return `<div id='switch-wrapper' class='${style.switchWrapper}' onclick="(${switchCharactersRadio})(event);"> ${switchHTML} </div>`;
}

function Search() {
  return `<label for='search'>Enter name: </label><input type='text' id='search'
            value='${window.currentState.currentSearch}' onchange='(${searchByName})(this.value);'>`;
}

function DisplayCharacters() {
  const displayList = filterCharactersByWork().filter(item =>
    item.name.toLowerCase().startsWith(window.currentState.currentSearch),
  );
  window.currentState.currentDisplayCharacter = displayList;
  const charactersListItems = displayList
    .map(
      character => `<li class='characterItem ${style.displayCharactersItem}' aria-label="${
        character.name
      }">
                                                                  <div class='${style.top}'>
                                                                    <img src='${getSecurityURL(
                                                                      character.image,
                                                                    )}'>
                                                                  </div>
                                                                  <p>${character.name}<p>
                                                                </li>`,
    )
    .join('');
  return `<div id='displayCharacters' class='${style.displayCharacters}'>
        <ul>
            ${charactersListItems}
        </ul>
    </div>`;
}

function filterCharactersByWork() {
  if (window.currentState.currentCharacters == 'staff') {
    return characters.filter(character => character.hogwartsStaff == true);
  } else if (window.currentState.currentCharacters == 'students') {
    return characters.filter(character => character.hogwartsStaff == false);
  } else {
    return characters;
  }
}

function AddEventCharacter() {
  const characterList = document.querySelector('#displayCharacters ul');
  characterList.addEventListener('click', function ({ target }) {
    const characterTarget = target.closest('.characterItem');
    displayCharacterInfo(characterTarget);
  });
}

function displayCharacterInfo(character) {
  const characterItem = window.currentState.currentDisplayCharacter.find(
    item => item.name == character.getAttribute('aria-label'),
  );
  const display = document.querySelector('#moreInfo');
  display.querySelector(`.top`).innerHTML = `<img src='${window.getSecurityURL(
    characterItem.image,
  )}'>`;
  display.querySelector('.name').innerHTML = characterItem.name;
  display.querySelector('.moreInfo').innerHTML = `Species: ${characterItem.species}<br>
                                                    Gender: ${characterItem.gender}<br>
                                                    Date of birth: ${characterItem.dateOfBirth}<br>
                                                    House: ${characterItem.house}<br>`;
  display.style = 'display: block';
}

function DisplayInfo() {
  function closeInfo(item) {
    item.parentElement.style.display = 'none';
  }

  return `<div id='moreInfo' class='${style.moreInfo}'>
            <div aria-label='' class='top ${style.top}'></div>
            <p class='name ${style.characterName}'></p>
            <p class='${style.characterInfo} moreInfo'></p>
            <button onclick="(${closeInfo})(this)">x</button>
    </div>`;
}

function switchCharactersRadio(event) {
  const switchTarget = event.target.previousElementSibling;
  if (switchTarget && switchTarget.value != window.currentState.currentCharacters) {
    window.currentState.currentCharacters = switchTarget.value;
    window.renderApp();
  }
}

function searchByName(characterName) {
  if (characterName != window.currentState.currentSearch) {
    window.currentState.currentSearch = characterName.trim().toLowerCase();
    window.renderApp();
  }
}

function getSecurityURL(url) {
  const urlLetters = url.split('');
  urlLetters.splice(4, 0, 's');
  return urlLetters.join('');
}
