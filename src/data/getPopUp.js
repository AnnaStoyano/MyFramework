export default function getPopUp(target, currentDisplayCharacters) {
  const targetCard = target.closest('div[aria-label]');
  if (targetCard) {
    return currentDisplayCharacters.find(
      item => item.name == targetCard.getAttribute('aria-label'),
    );
  }

  return null;
}
