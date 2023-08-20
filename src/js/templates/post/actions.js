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

import { deletePost } from "../../api/index";
import { getSearchParams } from "../../router/searchParams";
import { load } from "../../storage/load";
import { templateInstance } from "../instance";

export const postActions = (post) => {
  const profile = load("profile");
  const clone = templateInstance("postActions");
  const owned = post.author && profile.name === post.author.name;
  const { postId } = getSearchParams();
  // todo postId == stuff
  const viewing = postId === post.id;

  const viewButton = clone.querySelector("a[data-action=view]");
  const deleteButton = clone.querySelector("button[data-action=delete]");

  if (viewing) {
    viewButton.remove();
  } else {
    viewButton.href = `./?view=post&postId=${post.id}`;
  }

  if (owned) {
    deleteButton.addEventListener("click", async () => {
      await deletePost(post.id);
      location.href = "./";
    });
  } else {
    deleteButton.remove();
  }

  return clone;
};
