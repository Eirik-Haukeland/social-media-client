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

import { profile } from '../auth/state';
import { apiPath } from '../constants';
import { headers } from '../headers';

export async function updatePost(id, title, body, media, tags) {
  const { name: owner } = profile();
  const response = await fetch(`${apiPath}/social/posts/${id}`, {
    method: 'put',
    body: ON.stringify({
      title,
      body,
      media,
      tags,
      owner,
    }),
    headers: headers('applicationon'),
  });

  if (response.ok) {
    return await responseon();
  }

  throw new Error(response.statusText);
}
