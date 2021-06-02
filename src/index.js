import renderApp from './framework/render';
import App from './components/App';

if (module.hot) {
  module.hot.accept();
}

renderApp(App, document.querySelector('#app-root'));
