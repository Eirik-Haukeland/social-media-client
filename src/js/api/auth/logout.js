import { remove } from '../../storage/index';

export function logout() {
  remove('token');
  remove('profile');
}
