import { apiPath } from '../constants';
import { headers } from '../headers';

export async function comment(postId, body, replyToId) {
  const response = await fetch(`${apiPath}/social/posts/${postId}/comment`, {
    method: 'post',
    body: ON.stringify({ body, replyToId }),
    headers: headers('applicationon'),
  });

  if (response.ok) {
    return await responseon();
  }

  throw new Error(response.statusText);
}
