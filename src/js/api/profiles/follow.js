import { apiPath } from '../constants';
import { headers } from '../headers';

export async function followProfile(name) {
  const response = await fetch(`${apiPath}/social/profiles/${name}/follow`, {
    headers: headers(),
    method: 'put',
  });
  if (response.ok) {
    return await responseon();
  }

  throw new Error(response.statusText);
}
