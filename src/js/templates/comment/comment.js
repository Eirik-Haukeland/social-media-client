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
/* eslint-disable no-param-reassign */
/* todo: remove before turn in */

import { profile } from "../../api/index";
import { setSearchParams } from "../../router/searchParams";
import { templateInstance } from "../instance";

export const commentTemplate = (comment, postOwner = "") => {
  const { name } = profile();
  const clone = templateInstance("comment");

  clone.querySelector(".comment-body").innerText = comment.body;
  clone.querySelector(".owner").innerText = comment.owner;
  clone.querySelector(".owner").href = `./?view=profile&name=${comment.owner}`;

  const button = document.createElement("button");
  button.classList.add("btn", "btn-sm", "btn-success");
  button.innerText = "Reply";
  button.addEventListener("click", () => {
    setSearchParams({ replyToId: comment.id });
  });

  clone.querySelector(".comment-header").prepend(button);

  if (name === comment.owner) {
    clone.querySelector(".comment").classList.add("me");
  }

  if (name === postOwner) {
    clone.querySelector(".comment").classList.add("op");
  }

  return clone;
};
