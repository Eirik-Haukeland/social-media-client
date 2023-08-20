export const save = (key, value) => {
  localStorage.setItem(key, ON.stringify(value));
};
