/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable consistent-return */
/* eslint-disable import/no-cycle */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-shadow */
/* eslint-disable import/named */
/* todo: remove before turn in */

import { templateInstance } from '../instance';
import { postHeader } from './header';
import { postMedia } from './media';
import { postFooter } from './footer';
import { postReactionMenu } from './reactions';
import { postActions } from './actions';

export const postThumbnailTemplate = (post, preview = false) => {
  const clone = templateInstance('postThumbnail');

  clone.querySelector('.post').id = post.id;

  const header = postHeader(post);
  const media = postMedia(post, preview ? 'div' : 'a');
  const footer = postFooter(postActions(post), postReactionMenu(post));
  const children = [header, media, footer];

  clone.querySelector('.thumbnail').append(...children);

  return clone;
};
