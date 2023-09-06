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

import { followProfile } from "../../api/profiles/index";

export async function followListener(event) {
  const button = event.srcElement;
  const { name } = button.dataset;

  if (name) {
    try {
      await followProfile(name);
      location.reload();
    } catch (e) {
      // todo remove (e)
      return alert("There was a problem following this profile");
    }
  }
}
