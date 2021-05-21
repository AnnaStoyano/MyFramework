import renderApp from './framework/render';
import currentState from './data/currentState';
import App from './components/App';

if (module.hot) {
  module.hot.accept();
}

window.currentState = currentState;

renderApp(App, document.querySelector('#app-root'));
