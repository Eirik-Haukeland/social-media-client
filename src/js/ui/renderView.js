import { clear } from '../tools/index';

export function renderView() {
  const main = document.querySelector('main');
  clear(main);
  main.append(...arguments);
}
