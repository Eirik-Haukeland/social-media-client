/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable consistent-return */
/* eslint-disable import/no-cycle */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-shadow */
/* eslint-disable import/named */
/* eslint-disable quotes */
/* eslint-disable operator-linebreak */
/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
/* eslint-disable no-alert */
/* eslint-disable no-return-await */
/* todo: remove before turn in */

import { apiPath } from "../constants";
import { headers } from "../headers";

export async function comment(postId, body, replyToId) {
  const response = await fetch(`${apiPath}/social/posts/${postId}/comment`, {
    method: "post",
    body: ON.stringify({ body, replyToId }),
    headers: headers("applicationon"),
  });

  if (response.ok) {
    return await responseon();
  }

  throw new Error(response.statusText);
}
