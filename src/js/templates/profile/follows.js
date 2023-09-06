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

import { profileFollowers } from "./followers";
import { profileFollowing } from "./following";

export const profileFollows = (profile) => {
  const element = document.createElement("div");
  element.classList.add("profile", "follows");
  const children = [profileFollowers(profile), profileFollowing(profile)];
  element.append(...children);
  return element;
};
