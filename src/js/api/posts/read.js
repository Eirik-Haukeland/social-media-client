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

export async function getPosts(limit = 20, offset = 0) {
  const response = await fetch(
    `${apiPath}/social/posts?limit=${limit}&offset=${offset}&_reactions=true&_author=true&_comments=true`,
    { headers: headers() },
  );
  if (response.ok) {
    return await responseon();
  }

  throw new Error(response.statusText);
}

export async function getPost(id) {
  const response = await fetch(
    `${apiPath}/social/posts/${id}?_reactions=true&_author=true&_comments=true`,
    { headers: headers() },
  );
  if (response.ok) {
    return await responseon();
  }

  throw new Error(response.statusText);
}
