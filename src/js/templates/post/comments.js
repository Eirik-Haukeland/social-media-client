/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable consistent-return */
/* eslint-disable import/no-cycle */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-shadow */
/* eslint-disable import/named */
/* eslint-disable no-param-reassign */
/* todo: remove before turn in */

import { commentFormTemplate, commentTemplate } from '../comment/index';

export const postCommentsTemplate = (post) => {
  const element = document.createElement('div');
  element.classList.add('post-comments');

  if (post && post.comments) {
    const comments = post.comments.map((comment) => commentTemplate(comment, post.author.name));
    element.append(...comments);
  }

  element.append(commentFormTemplate(post.id));

  return element;
};
