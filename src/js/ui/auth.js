/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable consistent-return */
/* eslint-disable import/no-cycle */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-shadow */
/* eslint-disable import/named */
/* todo: remove before turn in */

import { load } from '../storage/index';

export function updateLoginVisibility() {
  const token = load('token');
  document.body.classList[token ? 'add' : 'remove']('logged-in');
}
