/* eslint-disable import/prefer-default-export */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable consistent-return */
/* eslint-disable import/no-cycle */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-shadow */
/* eslint-disable import/named */
/* todo: remove before turn in */

import { postThumbnailTemplate } from '../templates/index';

export const postList = (posts, preview = false) => {
  const element = document.createElement('div');
  element.classList.add('post', 'list');
  element.append(...posts.map((post) => postThumbnailTemplate(post, preview)));
  return element;
};
