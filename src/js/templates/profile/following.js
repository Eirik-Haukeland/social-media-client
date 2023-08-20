import { profileThumbnail } from './thumbnail';

export const profileFollowing = (profile) => {
  if (profile.following && profile.following.length) {
    const element = document.createElement('div');
    element.classList.add('following');
    element.append('Following', ...profile.following.map(profileThumbnail));
    return element;
  }

  return '\r\n';
};
