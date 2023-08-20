/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable consistent-return */
/* eslint-disable import/no-cycle */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-shadow */
/* eslint-disable import/named */
/* todo: remove before turn in */

export const postMedia = (post, tagName = 'a') => {
  if (post.media) {
    const element = document.createElement(tagName);
    element.classList.add('card-img');
    const img = new Image();
    img.src = post.media;
    img.alt = post.title;
    img.classList.add('img-fluid', 'w-100');

    if (tagName.toLowerCase() === 'a') {
      element.href = `./?view=post&postId=${post.id}`;
      element.title = `View ${post.title}`;
    }

    element.append(img);

    return element;
  }

  return '\r\n';
};
