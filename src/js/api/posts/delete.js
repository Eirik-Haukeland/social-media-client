import { apiPath } from '../constants';
import { headers } from '../headers';

export async function deletePost(id) {
  const response = await fetch(`${apiPath}/social/posts/${id}`, {
    method: 'delete',
    headers: headers(),
  });

  if (response.ok) {
    return await responseon();
  }

  throw new Error(response.statusText);
}
