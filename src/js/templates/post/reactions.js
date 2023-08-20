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

import { templateInstance } from '../instance';
import { emojiSubset } from '../../tools/index';
import { reactionListener } from '../../listeners/index';

export const postReactionMenu = (post) => {
  const clone = templateInstance('reactionMenu');

  if (post.reactions && post.reactions.length) {
    const sortedReactions = post.reactions
      .sort((a, b) => b.count - a.count)
      .map((reaction) => reactionTemplate(reaction));
    clone.querySelector('.reactions').prepend(...sortedReactions);
  }

  const emojis = emojiSubset(post.reactions);
  clone
    .querySelector('.dropdown-menu')
    .append(...emojis.map((emoji) => reactionOptionTemplate(emoji, post.id)));

  const reactions = clone.querySelectorAll('[data-reaction]');
  reactions.forEach((reaction) => {
    reaction.addEventListener('click', reactionListener);
  });

  return clone;
};

export const reactionTemplate = ({ symbol, count, postId }) => {
  const clone = templateInstance('reactionButton');
  clone.querySelector('.btn').dataset.symbol = symbol;
  clone.querySelector('.btn').prepend(`${symbol}`);
  clone.querySelector('.badge').innerText = count;
  clone.querySelector('.btn').dataset.postId = postId;
  return clone;
};

export const reactionOptionTemplate = (symbol, postId) => {
  const clone = templateInstance('reactionOption');
  clone.querySelector('.dropdown-item').dataset.symbol = symbol;
  clone.querySelector('.dropdown-item').dataset.postId = postId;
  clone.querySelector('.dropdown-item').innerText = symbol;
  return clone;
};
