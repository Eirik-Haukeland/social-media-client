/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable consistent-return */
/* eslint-disable import/no-cycle */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-shadow */
/* eslint-disable import/named */
/* eslint-disable quotes */
/* eslint-disable operator-linebreak */
/* todo: remove before turn in */

import { loginListener, registerListener } from "../listeners/index";

export const modals = () => {
  document
    .querySelector("form#loginForm")
    .addEventListener("submit", loginListener);
  // eslint-disable-next-line no-undef
  document
    .querySelector("form#registerForm")
    .addEventListener("submit", registerListener);
};
