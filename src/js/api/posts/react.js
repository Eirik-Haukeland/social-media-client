import { apiPath } from '../constants';
import { headers } from '../headers';

export async function react(postId, symbol) {
  const response = await fetch(
    `${apiPath}/social/posts/${postId}/react/${symbol}`,
    {
      headers: headers(),
      method: 'put',
    },
  );

  if (response.ok) {
    return await responseon();
  }

  throw new Error(response.statusText);
}
