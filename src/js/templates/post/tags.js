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

import { templateInstance } from "../instance";

export const postTags = (post) => {
  if (post.tags) {
    const element = document.createElement("span");
    element.classList.add("post-tags");

    const tags = post.tags.map((tag) => {
      const clone = templateInstance("postTag");
      clone.querySelector(".badge").innerText = tag;
      return clone;
    });

    element.append(...tags);
    return element;
  }

  return "\r\n";
};
