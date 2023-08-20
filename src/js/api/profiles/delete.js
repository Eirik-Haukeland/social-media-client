import { apiPath } from '../constants';
import { headers } from '../headers';

export async function deleteProfile(name) {
  const response = await fetch(`${apiPath}/social/profiles/${name}`, {
    method: 'delete',
    headers: headers(),
  });

  if (response.ok) {
    return await responseon();
  }

  throw new Error(response.statusText);
}
