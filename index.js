import style from './style.css';

if (module.hot) {
  module.hot.accept();
}

window.currentState = {
  currentCharacters: 'all',
  currentSearch: '',
  isDataLoading: false,
  error: null,
  characters: [],
  currentDisplayCharacters: [],
};

window.renderApp = renderApp;
window.getSecurityURL = getSecurityURL;
window.performDisplay = performDisplayCharacters;
window.searchByName = searchByName;
window.validateAndLoadData = validateAndLoadData;

function App() {
  return `<div>
    ${SwitchCharacters()}
    <br>
    ${Search()}
    <br>
    ${DisplayResult()}
    </div>`;
}

function renderApp() {
  const appRoot = document.querySelector('#app-root');
  appRoot.innerHTML = App();
  AddEventCharacter();
}

renderApp();

function DisplayResult() {
  return `<div>
  ${CharactersResult()}
  ${DisplayInfo()}
  </div>`;
}

function validateAndLoadData() {
  const API_URL = 'https://hp-api.herokuapp.com/api/characters';
  if (window.currentState.characters.length <= 0) {
    return fetch(API_URL)
      .then(res => res.json())
      .then(data => ({
        data,
      }));
  }
  return Promise.resolve(window.currentState.characters);
}

function CharactersResult() {
  window.performDisplay();
  let content = '';
  if (window.currentState.isDataLoading) {
    content = 'Data Loading...';
  }

  if (window.currentState.error != null) {
    content = window.currentState.error;
  }

  if (window.currentState.characters.length > 0) {
    window.currentState.currentDisplayCharacters = filterCharactersByWork().filter(item =>
      item.name.toLowerCase().startsWith(window.currentState.currentSearch),
    );
    const charactersListItems = window.currentState.currentDisplayCharacters
      .map(
        character => `<li class='characterItem ${style.displayCharactersItem}' aria-label="${
          character.name
        }">
                        <div class='${style.top}'>
                          <img src='${getSecurityURL(character.image)}'>
                        </div>
                        <p>${character.name}<p>
                      </li>`,
      )
      .join('');

    content = `<div id='displayCharacters' class='${style.displayCharacters}'>
            <ul>${charactersListItems}</ul>
            </div>`;
  }

  return content;
}

function performDisplayCharacters() {
  window.currentState.isDataLoading = true;
  window.currentState.error = null;
  window
    .validateAndLoadData()
    .then(({ err, data }) => {
      window.currentState.isDataLoading = false;

      if (err) {
        window.currentState.error = err;
      } else if (data) {
        window.currentState.characters = data;
        window.renderApp();
      }
    })
    .catch(() => {
      window.currentState.error = 'ERROR';
    });
}

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
    ${window.currentState.currentCharacters == switchItem.value ? 'checked' : ''} class='${
        style.switchInput
      }'>
                                                    <label for='${switchItem.id}' class='${
        style.switchLabel
      }'>
                                                    ${switchItem.value}
                                                    </label>`,
    )
    .join('');
  return `<div id='switch-wrapper' class='${style.switchWrapper}' onclick="(${switchCharactersRadio})(event);"> ${switchHTML} </div>`;
}

function Search() {
  return `<label for='search'>Enter name: </label><input type='text' id='search'
            value='${window.currentState.currentSearch}' onchange='window.searchByName(this.value);'>`;
}

function searchByName(characterName) {
  if (characterName != window.currentState.currentSearch) {
    window.currentState.currentSearch = characterName.trim().toLowerCase();
    window.renderApp();
  }
}

function filterCharactersByWork() {
  if (window.currentState.currentCharacters == 'staff') {
    return window.currentState.characters.filter(character => character.hogwartsStaff == true);
  } else if (window.currentState.currentCharacters == 'students') {
    return window.currentState.characters.filter(character => character.hogwartsStaff == false);
  } else {
    return window.currentState.characters;
  }
}

function AddEventCharacter() {
  const characterList = document.querySelector('#displayCharacters ul');
  if (characterList) {
    characterList.addEventListener('click', function ({ target }) {
      const characterTarget = target.closest('.characterItem');
      if (characterTarget) {
        displayCharacterInfo(characterTarget);
      }
    });
  }
}

function displayCharacterInfo(character) {
  const characterItem = window.currentState.currentDisplayCharacters.find(
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

function closeInfo(item) {
  item.closest('#moreInfo').style.display = 'none';
}

window.closeInfo = closeInfo;

function DisplayInfo() {
  return `<div id='moreInfo' class='${style.moreInfo}'>
            <div aria-label='' class='top ${style.top}'></div>
            <p class='name ${style.characterName}'></p>
            <p class='${style.characterInfo} moreInfo'></p>
            <button onclick='(()=>window.closeInfo(this))()'>x</button>
    </div>`;
}

function switchCharactersRadio(event) {
  const switchTarget = event.target.previousElementSibling;
  if (switchTarget && switchTarget.value != window.currentState.currentCharacters) {
    window.currentState.currentCharacters = switchTarget.value;
    window.renderApp();
  }
}

function getSecurityURL(url) {
  const urlLetters = url.split('');
  urlLetters.splice(4, 0, 's');
  return urlLetters.join('');
}
