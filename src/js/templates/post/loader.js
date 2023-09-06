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
/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
/* eslint-disable no-alert */
/* eslint-disable no-return-await */
/* todo: remove before turn in */
import { BLANK_POST } from "../../data/blank/post";
import { postThumbnailTemplate } from "./thumbnail";

export const postLoaderTemplate = (post = {}) => {
  post = {
    ...BLANK_POST,
    ...post,
  };

  const thumbnail = postThumbnailTemplate(post);
  thumbnail.querySelector(".post").classList.add("loader");
  return thumbnail;
};
