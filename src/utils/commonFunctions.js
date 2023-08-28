export const makeLabel = (str) => {
  let temp = str.charAt(0).toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i].toUpperCase() === str[i]) {
      temp += ' ' + str[i];
    } else {
      temp += str[i];
    }
  }
  return temp;
};
