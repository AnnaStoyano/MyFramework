export function getSecurityURL(url) {
  const urlLetters = url.split('');
  urlLetters.splice(4, 0, 's');
  return urlLetters.join('');
}

export const isFunction = func => typeof func === 'function';
