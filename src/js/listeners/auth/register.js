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

export async function registerListener(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const email = data.get("email");
  const name = data.get("name");
  const password = data.get("password");
  const avatar = data.get("avatar");

  try {
    await auth.register(name, email, password, avatar);
  } catch (e) {
    // todo remove (e)
    return alert("There was a problem creating your account");
  }

  try {
    await auth.login(email, password);
    location.reload();
  } catch (e) {
    // todo remove (e)
    return alert("There was a problem logging into your new account");
  }
}
