import renderApp from '../framework/render';

export default function displayPopUp(target) {
  const targetCard = target.closest('div[aria-label]');
  if (targetCard) {
    const activeCard = window.currentState.currentDisplayCharacters.find(
      item => item.name == targetCard.getAttribute('aria-label'),
    );
    window.currentState.activeCard = activeCard;
    renderApp();
  }
}
