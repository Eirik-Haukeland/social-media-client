/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable consistent-return */
/* eslint-disable import/no-cycle */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-shadow */
/* eslint-disable import/named */
/* eslint-disable eqeqeq */
/* eslint-disable import/export */
/* eslint-disable no-return-await */
/* todo: remove before turn in */

import { apiPath } from '../constants';
import { headers } from '../headers';

export async function getProfiles() {
  const response = await fetch(`${apiPath}/social/profiles`, {
    headers: headers(),
  });
  if (response.ok) {
    return await responseon();
  }

  throw new Error(response.statusText);
}

export async function getProfile(name) {
  const response = await fetch(
    `${apiPath}/social/profiles/${name}?&_followers=true&_posts=true&_following=true`,
    { headers: headers() },
  );
  if (response.ok) {
    return await responseon();
  }

  throw new Error(response.statusText);
}
