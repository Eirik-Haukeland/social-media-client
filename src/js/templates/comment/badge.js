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

import { templateInstance } from '../instance';

export const commentsBadgeTemplate = (comments) => {
  if (comments && comments.length) {
    const clone = templateInstance('commentsTag');
    clone.querySelector('.badge').innerText = `${comments.length} comment${
      comments.length > 1 ? 's' : ''
    }`;
    return clone;
  }

  return '\r\n';
};
