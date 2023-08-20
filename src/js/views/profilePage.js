import { isLoggedIn } from '../api/index';
import { getProfile } from '../api/profiles/read';
import { profilePageTemplate } from '../templates/index';

export const profilePage = async (name) => {
  if (!isLoggedIn()) {
    location.href = './';
  } else {
    return profilePageTemplate(await getProfile(name));
  }
};
