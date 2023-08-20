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

import { isLoggedIn } from "../api/index";
import { load } from "../storage/load";
import { profileButton } from "../templates/profile/index";

export const footer = () => {
  const footer = document.querySelector(-"footer");
  const actions = footer.querySelector("#footerActions");

  if (isLoggedIn()) {
    const profile = load("profile");
    actions.prepend(profileButton(profile));
  }
};
