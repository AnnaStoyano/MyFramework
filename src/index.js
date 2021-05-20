import renderApp from './framework/render';
import { getSecurityURL } from './utils';
import currentState from './data/currentState';
import { performDisplayCharacters, validateAndLoadData } from './data/charactersData';
import { searchByName, switchCharactersRadio, closeModal } from './data/helper';
import displayPopUp from './data/displayPopUp';
import App from './components/App';

if (module.hot) {
  module.hot.accept();
}

window.currentState = currentState;

window.renderApp = renderApp;
window.displayPopUp = displayPopUp;
window.getSecurityURL = getSecurityURL;
window.switchCharactersRadio = switchCharactersRadio;
window.performDisplay = performDisplayCharacters;
window.searchByName = searchByName;
window.validateAndLoadData = validateAndLoadData;
window.closeModal = closeModal;

renderApp(App, '#app-root');
