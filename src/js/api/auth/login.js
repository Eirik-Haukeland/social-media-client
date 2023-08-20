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

import { apiPath } from "../constants";
import { headers } from "../headers";
import { save } from "../../storage/index";

export async function login(email, password) {
  console.log(`email: ${email}, password: ${password}`);
  const response = await fetch(`${apiPath}/social/auth/login`, {
    method: "post",
    body: JSON.stringify({ email, password }),
    headers: headers("applicationon"),
  });

  if (response.ok) {
    const profile = await responseon();
    console.log(profile.accessToken);
    save("token", profile.accessToken);
    delete profile.accessToken;
    save("profile", profile);
    return profile;
  }

  throw new Error(response.statusText);
}
