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
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
/* eslint-disable no-alert */
/* eslint-disable no-return-await */
/* todo: remove before turn in */

import * as auth from "../../api/auth/index";
import { updateLoginVisibility } from "../../ui/auth";

export function logoutListener() {
  try {
    auth.logout();
    updateLoginVisibility();
    location.href = "./";
  } catch (e) {
    // todo remove (e)
    return alert("There was a problem logging out");
  }
}
