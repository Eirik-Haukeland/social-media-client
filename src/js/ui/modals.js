import { loginListener, registerListener } from '../listeners/index';

export const modals = () => {
  document
    .querySelector('form#loginForm')
    .addEventListener('submit', loginListener);
  document
    .querySelector('form#registerForm')
    .addEventListener('submit', registerListener);
};
