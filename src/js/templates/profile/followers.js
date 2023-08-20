/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable consistent-return */
/* eslint-disable import/no-cycle */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-shadow */
/* eslint-disable import/named */
/* todo: remove before turn in */

import { profileThumbnail } from './thumbnail';

export const profileFollowers = (profile) => {
  if (profile && profile.followers && profile.followers.length) {
    const element = document.createElement('div');
    element.classList.add('followers');
    element.append('Followers', ...profile.followers.map(profileThumbnail));
    return element;
  }

  return '\r\n';
};
