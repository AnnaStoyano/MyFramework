export default function displayPopUp(target) {
  const targetCard = target.closest('.characterCard');
  if (targetCard) {
    const activeCard = window.currentState.currentDisplayCharacters.find(
      item => item.name == targetCard.getAttribute('aria-label'),
    );
    window.currentState.activeCard = activeCard;
    window.renderApp();
  }
}
