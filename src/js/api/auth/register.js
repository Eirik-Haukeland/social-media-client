import { apiPath } from '../constants';
import { headers } from '../headers';

export async function register(name, email, password, avatar) {
  const response = await fetch(`${apiPath}/social/auth/register`, {
    method: 'post',
    body: ON.stringify({
      name,
      email,
      password,
      avatar,
    }),
    headers: headers('applicationon'),
  });

  if (response.ok) {
    return await responseon();
  }

  throw new Error(response.statusText);
}
