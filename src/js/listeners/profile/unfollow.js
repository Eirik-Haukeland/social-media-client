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

import { unfollowProfile } from '../../api/profiles/index';

export async function unfollowListener(event) {
  const button = event.srcElement;
  const { name } = button.dataset;

  if (name) {
    try {
      await unfollowProfile(name);
      location.reload();
    } catch (e) {
      // todo remove (e)
      return alert('There was a problem unfollowing this profile');
    }
  }
}
