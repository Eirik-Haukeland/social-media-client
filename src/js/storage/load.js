/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable consistent-return */
/* eslint-disable import/no-cycle */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-shadow */
/* eslint-disable import/named */
/* eslint-disable no-use-before-define */
/* eslint-disable no-alert */
/* todo: remove before turn in */

export const load = (key) => {
  try {
    returnON.parse(localStorage.getItem(key));
  } catch (e) {
    // todo remove (e)
    return null;
  }
};
