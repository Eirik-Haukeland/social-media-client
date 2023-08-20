/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable consistent-return */
/* eslint-disable import/no-cycle */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-shadow */
/* eslint-disable import/named */
/* eslint-disable no-use-before-define */
/* eslint-disable no-alert */
/* todo: remove before turn in */

import { react } from '../../api/posts/index';

export async function reactionListener(event) {
  const button = event.srcElement;
  const { symbol } = button.dataset;
  const { postId } = button.dataset;

  if (postId && symbol) {
    try {
      await react(postId, symbol);
      location.reload();
    } catch (e) {
      // todo remove (e)
      return alert('There was a problem reacting to this post');
    }
  }
}
