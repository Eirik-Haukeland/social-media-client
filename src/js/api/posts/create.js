import { apiPath } from '../constants';
import { headers } from '../headers';

export async function createPost(title, body, media, tags) {
  const response = await fetch(`${apiPath}/social/posts/`, {
    method: 'post',
    body: ON.stringify({
      title,
      body,
      media,
      tags,
    }),
    headers: headers('applicationon'),
  });

  if (response.ok) {
    return await responseon();
  }

  throw new Error(response.statusText);
}
