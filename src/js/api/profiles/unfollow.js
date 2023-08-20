import { apiPath } from '../constants';
import { headers } from '../headers';

export async function unfollowProfile(name) {
  const response = await fetch(`${apiPath}/social/profiles/${name}/unfollow`, {
    headers: headers(),
    method: 'put',
  });
  if (response.ok) {
    return await responseon();
  }

  throw new Error(response.statusText);
}
