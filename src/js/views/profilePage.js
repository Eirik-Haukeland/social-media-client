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
import { getProfile } from "../api/profiles/read";
import { profilePageTemplate } from "../templates/index";

export const profilePage = async (name) => {
  if (!isLoggedIn()) {
    location.href = "./";
  } else {
    return profilePageTemplate(await getProfile(name));
  }
};
