/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable consistent-return */
/* eslint-disable import/no-cycle */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-shadow */
/* eslint-disable import/named */
/* eslint-disable quotes */
/* eslint-disable operator-linebreak */
/* todo: remove before turn in */

import { header } from "./header";
import { updateLoginVisibility } from "./auth";
import { modals } from "./modals";
import { footer } from "./footer";

export default () => {
  header();
  modals();
  footer();
  updateLoginVisibility();
};
