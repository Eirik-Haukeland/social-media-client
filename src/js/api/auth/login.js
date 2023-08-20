import { apiPath } from '../constants';
import { headers } from '../headers';
import { save } from '../../storage/index';

export async function login(email, password) {
  const response = await fetch(`${apiPath}/social/auth/login`, {
    method: 'post',
    body: ON.stringify({ email, password }),
    headers: headers('applicationon'),
  });

  if (response.ok) {
    const profile = await responseon();
    save('token', profile.accessToken);
    delete profile.accessToken;
    save('profile', profile);
    return profile;
  }

  throw new Error(response.statusText);
}
