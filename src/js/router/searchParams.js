/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable consistent-return */
/* eslint-disable import/no-cycle */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-shadow */
/* eslint-disable import/named */
/* eslint-disable eqeqeq */
/* eslint-disable import/export */

/* todo: remove before turn in */

export const getSearchParams = () => {
  const url = new URL(window.location);
  return Object.fromEntries(url.searchParams);
};

export const setSearchParams = (params) => {
  const newParams = {
    ...getSearchParams(),
    ...params,
  };

  const searchParams = new URLSearchParams(newParams);
  window.location.search = searchParams.toString();
};
