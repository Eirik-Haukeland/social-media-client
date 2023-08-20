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

import { comment } from '../../api/index';
import { getSearchParams } from '../../router/searchParams';

export async function commentListener(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const body = data.get('body');
  const { postId } = form.dataset;
  const { replyToId } = getSearchParams();
  try {
    await comment(postId, body, replyToId);
  } catch (e) {
    // todo remove (e)
    return alert('There was a problem posting your comment');
  }

  form.remove();
  location.reload();
}
