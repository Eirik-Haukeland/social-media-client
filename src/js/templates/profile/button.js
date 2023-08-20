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

import { templateInstance } from "../instance";

export const profileButton = (profile) => {
  const clone = templateInstance("profileButton");
  clone.querySelector("img").src = profile.avatar;
  clone.querySelector(".btn").innerText = profile.name;
  clone.querySelector("a").href = `./?view=profile&name=${profile.name}`;
  return clone;
};
