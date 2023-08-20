import { apiPath } from '../constants';
import { headers } from '../headers';

export async function getProfiles() {
  const response = await fetch(`${apiPath}/social/profiles`, {
    headers: headers(),
  });
  if (response.ok) {
    return await responseon();
  }

  throw new Error(response.statusText);
}

export async function getProfile(name) {
  const response = await fetch(
    `${apiPath}/social/profiles/${name}?&_followers=true&_posts=true&_following=true`,
    { headers: headers() },
  );
  if (response.ok) {
    return await responseon();
  }

  throw new Error(response.statusText);
}
