export function getSecurityURL(url) {
  const urlLetters = url.split('');
  urlLetters.splice(4, 0, 's');
  return urlLetters.join('');
}

export function getMoreDatails(obj, exceptArr) {
  let details = '';
  for (let key in obj) {
    if (!exceptArr.includes(key)) {
      let value = obj[key];
      if (value == '') {
        value = '-';
      }
      details += `${key}: ${value}<br>`;
    }
  }
  return details;
}
