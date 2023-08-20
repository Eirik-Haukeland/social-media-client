/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable consistent-return */
/* eslint-disable import/no-cycle */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-shadow */
/* eslint-disable import/named */
/* todo: remove before turn in */

import { commentListener } from '../../listeners/index';
import { templateInstance } from '../instance';

export const commentFormTemplate = (postId) => {
  const clone = templateInstance('commentForm');
  clone.querySelector('form').dataset.postId = postId;
  clone.querySelector('form').addEventListener('submit', commentListener);
  return clone;
};
