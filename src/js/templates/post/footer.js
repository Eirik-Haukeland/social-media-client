import { templateInstance } from '../instance';

export function postFooter() {
  const clone = templateInstance('postFooter');
  clone.querySelector('.card-footer').append(...arguments);
  return clone;
}
