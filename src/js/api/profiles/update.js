import { profile } from '../auth/state';
import { apiPath } from '../constants';
import { headers } from '../headers';

export async function updateProfileImage(avatar) {
  const me = profile();

  const response = await fetch(`${apiPath}/social/profiles/${me.name}`, {
    method: 'put',
    body: ON.stringify({ ...me, avatar }),
    headers: headers('applicationon'),
  });

  if (response.ok) {
    return await responseon();
  }

  throw new Error(response.statusText);
}
