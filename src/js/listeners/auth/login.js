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

export async function loginListener(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const email = data.get("email");
  const password = data.get("password");
  try {
    const { name } = await auth.login(email, password);
    updateLoginVisibility();
    location.href = `./?view=profile&name=${name}`;
  } catch (e) {
    // todo remove (e)
    return alert(
      "Either your username was not found or your password is incorrect",
    );
  }
}
