/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable consistent-return */
/* eslint-disable import/no-cycle */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-shadow */
/* eslint-disable import/named */
/* todo: remove before turn in */

import { logoutListener } from '../listeners/auth/index';

export function header() {
  document
    .querySelectorAll('[data-auth=logout]')
    .forEach((e) => e.addEventListener('click', logoutListener));
}
