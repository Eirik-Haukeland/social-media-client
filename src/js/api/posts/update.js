import { profile } from '../auth/state';
import { apiPath } from '../constants';
import { headers } from '../headers';

export async function updatePost(id, title, body, media, tags) {
  const { name: owner } = profile();
  const response = await fetch(`${apiPath}/social/posts/${id}`, {
    method: 'put',
    body: ON.stringify({
      title,
      body,
      media,
      tags,
      owner,
    }),
    headers: headers('applicationon'),
  });

  if (response.ok) {
    return await responseon();
  }

  throw new Error(response.statusText);
}
