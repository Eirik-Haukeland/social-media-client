import { profileFollowers } from './followers';
import { profileFollowing } from './following';

export const profileFollows = (profile) => {
  const element = document.createElement('div');
  element.classList.add('profile', 'follows');
  const children = [profileFollowers(profile), profileFollowing(profile)];
  element.append(...children);
  return element;
};
