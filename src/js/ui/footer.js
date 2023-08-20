import { isLoggedIn } from '../api/index';
import { load } from '../storage/load';
import { profileButton } from '../templates/profile/index';

export const footer = () => {
  const footer = document.querySelector('footer');
  const actions = footer.querySelector('#footerActions');

  if (isLoggedIn()) {
    const profile = load('profile');
    actions.prepend(profileButton(profile));
  }
};
