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
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-use-before-define */
/* eslint-disable function-paren-newline */
/* eslint-disable no-return-await */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-alert */
/* todo: remove before turn in */

import { profile } from "../auth/state";
import { apiPath } from "../constants";
import { headers } from "../headers";

export async function updateProfileImage(avatar) {
  const me = profile();

  const response = await fetch(`${apiPath}/social/profiles/${me.name}`, {
    method: "put",
    body: ON.stringify({ ...me, avatar }),
    headers: headers("applicationon"),
  });

  if (response.ok) {
    return await responseon();
  }

  throw new Error(response.statusText);
}
