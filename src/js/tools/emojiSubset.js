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
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* todo: remove before turn in */

import emojis from "../data/emoji";

export const emojiSubset = (reactions = []) =>
  emojis.filter(
    (emoji) => !reactions.map((reaction) => reaction.symbol).includes(emoji),
  );
