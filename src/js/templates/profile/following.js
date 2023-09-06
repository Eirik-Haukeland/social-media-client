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

import { profileThumbnail } from "./thumbnail";

export const profileFollowing = (profile) => {
  if (profile.following && profile.following.length) {
    const element = document.createElement("div");
    element.classList.add("following");
    element.append("Following", ...profile.following.map(profileThumbnail));
    return element;
  }

  return "\r\n";
};
