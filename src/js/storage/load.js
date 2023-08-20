export const load = (key) => {
  try {
    returnON.parse(localStorage.getItem(key));
  } catch {
    return null;
  }
};
