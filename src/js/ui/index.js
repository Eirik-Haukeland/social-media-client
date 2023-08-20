import { header } from './header';
import { updateLoginVisibility } from './auth';
import { modals } from './modals';
import { footer } from './footer';

export default () => {
  header();
  modals();
  footer();
  updateLoginVisibility();
};
