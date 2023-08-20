/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable consistent-return */
/* eslint-disable import/no-cycle */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-shadow */
/* eslint-disable import/named */
/* eslint-disable no-param-reassign */
/* todo: remove before turn in */

export const templateInstance = (id = '404') => {
  const template = document.querySelector(`template#${id}`);
  if (template) {
    return template.content.cloneNode(true);
  }

  throw new Error(`Template #${id} not found`);
};
